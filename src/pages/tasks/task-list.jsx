import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "@tanstack/react-router";
import Navbar from "../../components/navbar";
import TaskGrid from "../../components/task-grid";
import { useGetAllTasks } from "../../querys/useTask.query";

export default function TaskListPage() {
  const { data: tasks, isLoading, error } = useGetAllTasks();
  const navigate = useNavigate();

  if (isLoading)
    return <p className="text-white text-center mt-20">Loading...</p>;
  if (error)
    return (
      <p className="text-red-400 text-center mt-20">Failed to load Tasks</p>
    );

  return (
    <div className="min-h-screen bg-purple-600 relative">
      <Navbar />

      <div className="max-w-5xl mx-auto p-4 sm:p-8 mt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">My Tasks</h2>

          {/* Mobile floating button */}
          <button
            onClick={() => navigate({ to: "/create-task" })}
            className="sm:hidden fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            <AiOutlinePlus size={24} />
          </button>
        </div>

        <TaskGrid tasks={tasks} />
      </div>
    </div>
  );
}
