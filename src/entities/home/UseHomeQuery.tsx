import { useQuery } from "@tanstack/react-query";
import { fetchHome } from "./api";

export function useHomeQuery() {
  return useQuery({
    queryKey: ["home"],
    queryFn: fetchHome,
  });
}
