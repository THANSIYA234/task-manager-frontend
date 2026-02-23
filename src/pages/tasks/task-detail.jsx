import { useParams, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import {
  useGetTaskById,
  useUpdateTask,
  useDeleteTask,
} from "../../querys/useTask.query";

function TaskDetail() {
  const { taskId } = useParams({ from: "/task/$taskId" });

  const navigate = useNavigate();

  const { data } = useGetTaskById(taskId);
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "OPEN",
  });

  // Load data when fetched
  useEffect(() => {
    if (data) {
      setTask({
        title: data.title || "",
        description: data.description || "",
        status: data.status || "OPEN",
      });
    }
  }, [data]);
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateTask.mutate(
      { id: taskId, payload: task },
      {
        onSuccess: () => {
          (setIsEditing(false), navigate({ to: "/task" }));
        },
      },
    );
  };
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?"))
      navigate({ to: "/task" });
    deleteTask.mutate(taskId, {
      onError: () => {
        alert("Failed to delete Task");
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-purple-600">Task #{taskId}</h2>

          <div className="flex items-center gap-4">
            {/* Delete Icon */}
            <FaTrash
              onClick={handleDelete}
              className="text-red-500 cursor-pointer hover:scale-110 transition"
            />

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-sm text-purple-600 font-semibold"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            value={task.title || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border p-3 rounded-xl focus:outline-purple-500 disabled:bg-gray-100"
          />

          <textarea
            name="description"
            value={task.description || ""}
            onChange={handleChange}
            disabled={!isEditing}
            rows="3"
            className="w-full border p-3 rounded-xl focus:outline-purple-500 disabled:bg-gray-100"
          />

          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border p-3 rounded-xl focus:outline-purple-500 disabled:bg-gray-100"
          >
            <option value="OPEN">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Completed</option>
          </select>

          {isEditing && (
            <button
              onClick={handleSave}
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
