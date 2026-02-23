import { useState } from "react";
import { useCreateTask } from "../../querys/useTask.query";
import { useNavigate } from "@tanstack/react-router";

function CreateTask() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "OPEN",
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateTask();
  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(form, {
      onSuccess: () => {
        navigate({ to: "/task" });
      },
      onError: (err) => {
        console.log(err.response?.data?.message);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex items-center justify-center bg-purple-600 px-4">
        <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
            Create Task
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border p-3 rounded-xl focus:outline-purple-500"
            />

            <textarea
              placeholder="Task Description"
              rows="3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border p-3 rounded-xl focus:outline-purple-500"
            />

            <select
              className="w-full border p-3 rounded-xl focus:outline-purple-500"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="OPEN">Open</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <button
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold"
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Saving..." : "Save Task"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateTask;
