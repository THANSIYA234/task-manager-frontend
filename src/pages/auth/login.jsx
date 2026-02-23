import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLogin } from "../../querys/useAuth.query";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const { mutate, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    mutate(form, {
      onError: (err) => {
        setLoginError(
          err.response?.data?.message || "Something went wrong. Try again.",
        );
      },
      onSuccess: () => {
        navigate({ to: "/task" });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-purple-700 text-white p-6">
            <h2 className="text-xl font-semibold">Sign In</h2>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-800">Welcome</h3>
              <p className="text-xs text-gray-500">
                Hello there, sign in to continue.
              </p>
            </div>

            {loginError && (
              <p className="text-red-600 text-sm text-center">{loginError}</p>
            )}

            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </span>
            </div>

            <button
              className="w-full bg-purple-700 text-white py-3 rounded-xl font-semibold hover:bg-purple-800 transition"
              type="submit" // ✅ allows Enter key
              disabled={isPending}
            >
              {isPending ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-center text-sm">
              Didn't have an account?
              <span
                className="text-purple-600 ml-1 cursor-pointer"
                onClick={() => navigate({ to: "/register" })}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
