import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CodeAntAIComponent = () => {
    const [selectedInterface, setSelectedInterface] = useState("interface1");
    const navigate = useNavigate()

    const handleButtonClick = (interfaceName) => {
        setSelectedInterface(interfaceName);
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-4">

                {/* Left Panel - Hidden on Mobile */}
                <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
                        <div className="flex items-center mb-4">
                            <img
                                src="src/assets/Subtract.png"
                                alt="AI logo"
                                width="50"
                                height="50"
                                className="w-12 h-12 mr-2"
                            />
                            <h2 className="text-xl font-bold">AI to Detect &amp; Autofix Bad Code</h2>
                        </div>
                        <div className="flex justify-between text-center">
                            <div>
                                <p className="text-lg font-semibold">30+</p>
                                <p className="text-gray-500">Language Support</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">10K+</p>
                                <p className="text-gray-500">Developers</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">100K+</p>
                                <p className="text-gray-500">Hours Saved</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-200 text-purple-600 rounded-full p-2 mr-2">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Issues Fixed</p>
                                <p className="text-2xl font-bold">500K+</p>
                            </div>
                        </div>
                        <div className="text-blue-500">
                            <i className="fas fa-arrow-up"></i> 14% This week
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src="src/assets/Subtract.png"
                                alt="CodeAnt AI logo"
                                width="50"
                                height="50"
                                className="w-12 h-12 mr-2"
                            />
                            <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button
                                onClick={() => handleButtonClick("interface1")}
                                className={`px-4 py-2 rounded 
                                    ${
                                        selectedInterface === "interface1"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-300 text-black"
                                    }`}
                            >
                                SAAS
                            </button>

                            <button
                                onClick={() => handleButtonClick("interface2")}
                                className={`px-4 py-2 rounded 
                                    ${
                                        selectedInterface === "interface2"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-300 text-black"
                                    }`}
                            >
                                Self Hosted
                            </button>
                        </div>
                        {selectedInterface === "interface1" && (
                            <div className="flex flex-col space-y-4">
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full" onClick={()=>navigate('/repository')}>
                                    Login Page
                                </button>
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full" onClick={()=>navigate('/repository')}>
                                    <img
                                        src="src/assets/github.png"
                                        alt="GitHub Logo"
                                        className="w-6 h-6 mr-2"
                                    />{" "}
                                    Sign in with Github
                                </button>
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full">
                                    <img
                                        src="src/assets/bitbucket.png"
                                        alt="GitHub Logo"
                                        className="w-6 h-6 mr-2"
                                    />{" "}
                                    Sign in with Bitbucket
                                </button>
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full">
                                    <img
                                        src="src/assets/azure.png"
                                        alt="GitHub Logo"
                                        className="w-6 h-6 mr-2"
                                    />{" "}
                                    Sign in with Azure Devops
                                </button>
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full">
                                    <img
                                        src="src/assets/gitlab.png"
                                        alt="GitHub Logo"
                                        className="w-6 h-6 mr-2"
                                    />{" "}
                                    Sign in with GitLab
                                </button>
                            </div>
                        )}
                        {selectedInterface === "interface2" && (
                            <div className="flex flex-col space-y-2">
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full">
                                    <img
                                        src="src/assets/gitlab.png"
                                        alt="GitLAb Logo"
                                        className="w-6 h-6 mr-2"
                                    />{" "}
                                    Self Hosted GitLAb
                                </button>
                                <button className="flex items-center justify-center border border-gray-300 rounded-lg py-2 px-4 w-full">
                                    <img
                                        src="src/assets/key.png"
                                        alt="Key Logo"
                                        className="w-6 h-6 mr-2"
                                    />{" "}
                                    Sign in with SSO
                                </button>
                            </div>
                        )}
                        <p className="text-center text-gray-500 mt-4">
                            By signing up you agree to the
                            <a href="#" className="text-blue-500">
                                {" "}
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeAntAIComponent;
