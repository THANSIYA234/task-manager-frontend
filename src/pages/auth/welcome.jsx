import { useNavigate } from "@tanstack/react-router";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-500 flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>

        <p className="text-sm mb-10">Small steps, big achievements.</p>

        <button
          className="w-full border border-white py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          onClick={() => navigate({ to: "/register" })}
        >
          Create an account
        </button>

        <p className="text-sm mt-8">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate({ to: "/login" })}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
