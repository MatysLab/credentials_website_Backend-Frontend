import express from 'express';

const app = express();
const PORT = process.env.PORT || 5003;


app.listen(PORT, () => {
    console.log('Backend has started on port: ' + PORT);
})