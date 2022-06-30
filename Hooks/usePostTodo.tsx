import { useMutation, useQueryClient } from "react-query";
import apis from "../api/main";
import { TodoType } from "../components/ListContainer"; // import type

const addTodo = async (data : TodoType) => {
    const addTodoDB = await apis.addTodo(data);
    return addTodoDB;
}


const usePostTodo = () => {

    const queryClient = useQueryClient();

  return useMutation(addTodo, {
    onSuccess : () => {
        queryClient.invalidateQueries("todos")  // 바로 invalidate -> 데이터가 새로 불러와짐
        alert("작성 완료!")
    },
    onError : () => {
        alert("작성 못했음!")
    },
    onSettled : () => {
        alert("아무튼 완료!")
    }
  })
}

export default usePostTodo;