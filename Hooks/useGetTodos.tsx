import { useQuery } from "react-query";
import apis from '../api/main';

const useGetTodos = () => {

  const fetcher = async () => {
    const { data } = await apis.getTodos();
    return data;
  }

  return useQuery("todos", fetcher)
}

export default useGetTodos;