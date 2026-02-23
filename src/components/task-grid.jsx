import { Link } from "@tanstack/react-router";
import TaskCard from "./task-card";

export default function TaskGrid({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-white text-center col-span-full">
        No tasks found. Create your first task!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Link key={task.id} to="/task/$taskId" params={{ taskId: task.id }}>
          <TaskCard
            title={task.title}
            description={task.description}
            status={task.status}
          />
        </Link>
      ))}
    </div>
  );
}
