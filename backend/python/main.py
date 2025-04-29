import uvicorn
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil
import torch
from torchvision import models, transforms
from PIL import Image

# Load a pretrained model (ResNet-18) and set to evaluation mode
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = models.resnet18(weights=None)  # Load model without pretrained weights
num_ftrs = model.fc.in_features
model.fc = torch.nn.Linear(num_ftrs, 2)  # Assuming 2 classes: Dog and Cat
model.load_state_dict(torch.load("animal_model.pth"))  # Load the trained weights
model = model.to(device)
model.eval()  # Set model to evaluation mode

# Image preprocessing (same as during training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.5] * 3, [0.5] * 3)  # Match the training normalization
])

# FastAPI app setup
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "semphas.com",
    "10.0.0.172:3000",
    "96.22.117.44:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

uploaded_files = []

# Upload endpoint
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    # Save the uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    uploaded_files.append(file_path)

    # Open the uploaded image file for prediction
    image = Image.open(file_path)

    # Preprocess the image
    image_tensor = transform(image).unsqueeze(0).to(device)  # Add batch dimension and move to device

    # Make the prediction
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted_class = torch.max(outputs, 1)

    # Prediction result (Dog or Cat)
    prediction = "Cat" if predicted_class.item() == 0 else "Dog"

    return {
        "message": "File uploaded successfully",
        "filename": file.filename,
        "prediction": prediction
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
