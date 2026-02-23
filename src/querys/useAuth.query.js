import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, loginUser, registerUser } from "../services/auth.service";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
export const useLogin = (onSuccess) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      const token = res?.data?.access_token ?? res?.access_token ?? null;
      if (token) {
        localStorage.setItem("token", token);
        qc.invalidateQueries(["me"]);
      }

      if (onSuccess) onSuccess(res);
    },
    onError: (err) => {
      console.error("Login error:", err);

      throw err;
    },
  });
};
export const useGetMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe(),
    enabled,
  });
};

export const useLogout = () => {
  const qc = useQueryClient();
  return () => {
    localStorage.removeItem("token");
    qc.removeQueries(["me"]);
    // optionally qc.clear() or navigate to login
  };
};
