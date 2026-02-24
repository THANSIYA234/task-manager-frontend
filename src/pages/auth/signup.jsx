import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRegister } from "../../querys/useAuth.query";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { mutate, isPending, error } = useRegister();
  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(form, {
      onSuccess: () => {
        navigate({ to: "/login" });
      },
      onError: (err) => {
        console.log(err.response?.data?.message);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-purple-700 text-white p-6 ">
            <h2 className="text-xl font-semibold">Create account</h2>
          </div>

          {/* Form section */}
          <div className="p-6 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-800">Welcome</h3>
              <p className="text-xs text-gray-500">
                Hello there, sign up to continue.
              </p>
            </div>
            {error && (
              <p className="text-red-500">{error.response?.data?.message}</p>
            )}
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-gray-100 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
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
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Signing Up.." : "Sign UP"}
            </button>

            <p className="text-center text-sm">
              Already have an account?
              <span
                className="text-purple-600 ml-1 cursor-pointer"
                onClick={() => navigate({ to: "/login" })}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
