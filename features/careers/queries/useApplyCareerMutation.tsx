import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { applyToCareer } from "../services";

export const useApplyCareerMutation = () =>
  useMutation({
    mutationFn: applyToCareer,
    onSuccess: () => {
      toast.success("Application sent 🚀");
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });
