import axiosInstance from "../api/axios";
export const getAllTasks = async () => {
  const res = await axiosInstance.get("/task");

  return res.data.data;
};

export const getAllTaskByID = async (id) => {
  const res = await axiosInstance.get(`/task/${id}`);
  return res.data.data;
};

export const createTask = async (data) => {
  const res = await axiosInstance.post("/task", data);
  return res.data.data;
};
export const updateTaskByID = async (id, payload) => {
  const res = await axiosInstance.put(`/task/${id}`, payload);
  console.log("API call to id:", id, "payload:", payload);
  return res.data.data;
};

export const deleteTaskByID = async (id) => {
  const res = await axiosInstance.delete(`/task/${id}`);
  return res.data.data;
};
