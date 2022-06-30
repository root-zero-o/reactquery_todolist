import { useMutation, useQueryClient } from "react-query";
import apis from '../api/main'

const deleteTodo = async (id : number | undefined) => {
    return await apis.deleteTodo(id)
}

const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTodo, {
        onSuccess : () => {
            queryClient.invalidateQueries("todos")
            alert("삭제 완료!")
        },
        onError: () => {
            alert("삭제 실패!")
        },
        onSettled: () => {
            alert("아무튼 완료!")
        }
    })
}

export default useDeleteTodo;
