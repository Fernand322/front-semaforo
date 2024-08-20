import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "password") {
            navigate("/dashboard");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xs p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
