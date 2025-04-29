'use client'
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClassifierProject = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const stepsRef = useRef(null);
    const canvasRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisStatus, setAnalysisStatus] = useState('');

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: true,
                anticipatePin: 1,
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "top top",
                    scrub: true,
                },
            });

            timeline.to(stepsRef.current, {
                opacity: 1,
                x: 0,
                ease: "power2.out",
            });
        });

        return () => ctx.revert();
    }, [isMobile]);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = canvasRef.current;
                        if (canvas) {
                            const ctx = canvas.getContext('2d');
                            if (ctx) {
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                let scale = 1;
                                if (img.width > canvas.width) {
                                    scale = canvas.width / img.width;
                                }
                                if (img.height > canvas.height) {
                                    scale = Math.min(scale, canvas.height / img.height);
                                }

                                const imgWidth = img.width * scale;
                                const imgHeight = img.height * scale;
                                const x = (canvas.width - imgWidth) / 2;
                                const y = (canvas.height - imgHeight) / 2;
                                analyzeImage(file);

                            }
                        }
                    };
                    img.src = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                alert("Please drop an image file.");
            }
        }
    };

    const analyzeImage = async (imageFile) => {
        setIsAnalyzing(true);
        setAnalysisStatus('Connecting to backend server...');
        console.log("Analyzing image:", imageFile);

        await new Promise(resolve => setTimeout(resolve, 500));
        setAnalysisStatus('Processing image...');

        await new Promise(resolve => setTimeout(resolve, 1500));
        setAnalysisStatus('Returning value...');

        await new Promise(resolve => setTimeout(resolve, 1000));

        const isDog = Math.random() < 0.5;
        setAnalysisStatus(`Result: ${isDog ? 'Dog' : 'Cat'}`);
        alert(`The image is likely a ${isDog ? 'Dog' : 'Cat'}!`);

        setIsAnalyzing(false);
        setTimeout(() => {
            setAnalysisStatus('');
        }, 1000);
    };

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center justify-start mb-[10vh] relative px-4 sm:px-8 m-[32px]"
            style={{ paddingBottom: '80px' }}
        >
            <h1
                ref={titleRef}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center w-full mb-10 mt-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
                Smart Pet Identifier: AI-Powered Dog vs. Cat Classifier
            </h1>

            <div className="flex flex-col lg:flex-row w-full relative gap-8 lg:min-h-[60vh]">
                <div>
                    <div
                        ref={stepsRef}
                        className="flex flex-col gap-4 text-gray-700 font-medium opacity-0 transition-all duration-700 ease-in-out w-full sm:w-[300px] lg:w-[330px]"
                        style={{ transform: "translateX(-10px)" }}
                    >
                        {[
                            "1. Drag and drop file.",
                            "2. Start analysing.",
                            "3. Tell us what the item in the image was.",
                            "4. Thank you.",
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center">
                                    {i + 1}
                                </div>
                                <p className="text-sm sm:text-base">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className={`
                        border-2 border-gray-300 bg-gray-100 aspect-video
                        rounded-4xl shadow-lg transition-transform duration-500
                        flex items-center justify-center
                        ${isMobile ? "w-full h-[200px] ml-auto" : "lg:w-[130vh] lg:h-[68vh] mx-auto"}
                        relative cursor-pointer
                    `}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => {
                        setDragOver(false);
                    }}
                    onDrop={handleDrop}
                    style={{
                        backgroundColor: dragOver ? 'rgba(107, 114, 128, 0.2)' : 'rgba(243, 244, 246, 1)',
                        borderStyle: dragOver ? 'dashed' : 'solid',
                        borderColor: dragOver ? '#6b7280' : '#d1d5db',
                    }}
                >
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full rounded-4xl"
                        width={isMobile ? 320 : 800}
                        height={isMobile ? 200 : 450}
                    />
                    {!isAnalyzing && !dragOver && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="flex flex-col items-center text-center">
                                <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                                </svg>
                                <p className="text-sm text-gray-500">Drag and drop an image here</p>
                            </div>

                            {/* Dog and Cat overlays can remain where they are if intended to be outside center */}
                            <img
                                src="/dog.png"
                                alt="Dog"
                                className="absolute bottom-24 right-36 w-55 h-70 opacity-100"
                            />
                            <img
                                src="/cat.png"
                                alt="Cat"
                                className="absolute bottom-2 right-6 w-50 h-65 opacity-100"
                            />
                        </div>
                    )}

                    {isAnalyzing && (
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-200"></div>
                                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-400"></div>
                                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-600"></div>
                            </div>
                            <p className="text-black text-md">{analysisStatus}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassifierProject;
