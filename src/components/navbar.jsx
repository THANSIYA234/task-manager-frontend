import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  return (
    <nav className="bg-purple-700 text-white px-4 sm:px-8 py-3 flex justify-between items-center shadow-md">
      <h1
        className="text-xl sm:text-2xl font-bold cursor-pointer"
        onClick={() => navigate({ to: "/task" })}
      >
        TaskManager
      </h1>

      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={() => navigate({ to: "/create-task" })}
          className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-xl hover:bg-purple-100 transition"
        >
          <AiOutlinePlus size={20} /> Create Task
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate({ to: "/login" });
          }}
          className="flex items-center gap-2 bg-red-600 px-3 py-2 rounded-xl hover:bg-red-700 transition"
        >
          <AiOutlineLogout size={18} /> Logout
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-purple-700 text-white flex flex-col gap-2 p-4 sm:hidden">
          <button
            onClick={() => navigate({ to: "/create-task" })}
            className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-xl"
          >
            <AiOutlinePlus size={20} /> Create Task
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate({ to: "/login" });
            }}
            className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-xl"
          >
            <AiOutlineLogout size={18} /> Logout
          </button>
        </div>
      )}
    </nav>
  );
}
