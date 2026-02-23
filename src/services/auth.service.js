import axiosInstance from "../api/axios";

export const registerUser = async (data) => {
  const res = await axiosInstance.post("/auth/register", data);
  return res.data.data;
};

export const loginUser = async (data) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data.data;
};

export const getMe = async () => {
  const res = await axiosInstance.get("/auth/me");
  return res.data.data;
};
