import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = (page) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      return data;
    },
  });
};
