export default function TaskCard({ title, description, status }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-200">
      <div className="flex justify-between items-center flex-wrap">
        <h3 className="font-semibold text-lg">{title}</h3>

        <span
          className={`mt-2 sm:mt-0 px-3 py-1 text-xs rounded-full font-semibold ${
            status === "Completed"
              ? "bg-green-100 text-green-600"
              : status === "In Progress"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mt-2">{description}</p>
    </div>
  );
}
