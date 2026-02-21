import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { applyToCareer, ApplyToCareerPayload } from "../services";

export const useApplyCareerMutation = () =>
  useMutation({
    mutationFn: (payload: ApplyToCareerPayload) => applyToCareer(payload),
    onSuccess: () => {
      toast.success("Application sent 🚀");
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });
