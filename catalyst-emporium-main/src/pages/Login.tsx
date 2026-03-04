import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [userAction, setUserAction] = useState<"login" | "signup" | null>(null);

  const [userId, setUserId] = useState(""); // email for user, ID for admin
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // only for signup

  // Admin Login
  const handleAdminLogin = () => {
    const success = login(userId, password);
    if (success) navigate("/dashboard");
    else alert("Invalid Admin Credentials");
  };

  // User Login
  const handleUserLogin = () => {
    const success = login(userId, password);
    if (success) navigate("/products");
    else alert("Invalid User Credentials");
  };

  // Signup
  const handleSignup = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Save user to localStorage
    localStorage.setItem("userData", JSON.stringify({ email, password }));
    alert("Signup Successful! Please login now.");
    setUserAction("login");
    setUserId(email);
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to BuyNest</h2>

        {/* Role Selection */}
        {!role && (
          <>
            <button
              onClick={() => setRole("admin")}
              className="w-full bg-orange-500 text-white p-2 rounded mb-3"
            >
              Admin
            </button>
            <button
              onClick={() => setRole("user")}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              User
            </button>
          </>
        )}

        {/* Admin Login */}
        {role === "admin" && (
          <>
            <input
              type="text"
              placeholder="Enter Admin ID"
              className="w-full p-2 border rounded mb-3"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border rounded mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleAdminLogin}
              className="w-full bg-orange-600 text-white p-2 rounded"
            >
              Login
            </button>
            <button
              onClick={() => setRole(null)}
              className="mt-2 text-sm text-gray-500"
            >
              ← Back
            </button>
          </>
        )}

        {/* User Options */}
        {role === "user" && !userAction && (
          <>
            <button
              onClick={() => setUserAction("login")}
              className="w-full bg-green-500 text-white p-2 rounded mb-3"
            >
              Login
            </button>
            <button
              onClick={() => setUserAction("signup")}
              className="w-full bg-purple-500 text-white p-2 rounded"
            >
              Signup
            </button>
            <button
              onClick={() => setRole(null)}
              className="mt-2 text-sm text-gray-500"
            >
              ← Back
            </button>
          </>
        )}

        {/* User Login */}
        {role === "user" && userAction === "login" && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border rounded mb-3"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border rounded mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleUserLogin}
              className="w-full bg-green-600 text-white p-2 rounded"
            >
              Login
            </button>
            <button
              onClick={() => setUserAction(null)}
              className="mt-2 text-sm text-gray-500"
            >
              ← Back
            </button>
          </>
        )}

        {/* User Signup */}
        {role === "user" && userAction === "signup" && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border rounded mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-2 border rounded mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSignup}
              className="w-full bg-purple-600 text-white p-2 rounded"
            >
              Signup
            </button>
            <button
              onClick={() => setUserAction(null)}
              className="mt-2 text-sm text-gray-500"
            >
              ← Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;