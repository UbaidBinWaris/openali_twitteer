import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim() || !pass.trim()) {
      setError("Email and password are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), pass: pass.trim() }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Signup failed.");
      }

      setSuccess("Signup successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(err.message || "Signup failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Sign Up
        </h2>

        {error && (
          <p className="text-red-400 mb-2 text-sm text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-400 mb-2 text-sm text-center">{success}</p>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 bg-white/20 text-white placeholder-white border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="pass"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 bg-white/20 text-white placeholder-white border border-white/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 px-4 border border-violet-700 rounded-lg hover:bg-black/20 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-200 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
