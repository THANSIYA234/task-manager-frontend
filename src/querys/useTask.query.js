import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTask,
  deleteTaskByID,
  getAllTaskByID,
  getAllTasks,
  updateTaskByID,
} from "../services/task.service";

export const useGetAllTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getAllTasks,
  });
};
export const useGetTaskById = (id) => {
  return useQuery({
    queryKey: ["task", id],
    queryFn: () => getAllTaskByID(id),
    enabled: !!id,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["task"]);
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) => updateTaskByID(id, payload),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["task", variables.id], data);
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTaskByID,
    onSuccess: () => queryClient.invalidateQueries(["task"]),
  });
};
