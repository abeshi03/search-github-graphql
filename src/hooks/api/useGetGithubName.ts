import { useQuery } from "@apollo/client";
import {ME} from "../../query/query";

export const useGetGithubName = () => {
  const { loading, error, data } = useQuery(ME)
  return { loading, error, data }
}
