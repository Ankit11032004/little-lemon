import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        console.log(data);
        if (data) {
            navigate("/login");
            alert("Signup successful!");
        } else {
            alert("Signup failed. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-lime-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
                <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
                    🍋 Create Your Account
                </h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Lemon"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@lemon.com"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                    Sign Up
                </button>

                <p className="mt-4 text-sm text-center text-gray-500">
                    Already have an account? <Link to="/login" className="text-green-600 hover:underline cursor-pointer">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default SignupPage;
