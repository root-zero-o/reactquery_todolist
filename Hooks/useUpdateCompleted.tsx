import apis, { UpdateData } from '../api/main'
import { useMutation, useQueryClient } from "react-query";

const updateCompleted = async (updateData : UpdateData) => {
    return await apis.updateCompleted(updateData)
}

const useUpdateCompleted = () => {
    const queryClient = useQueryClient();
    return useMutation(updateCompleted, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos"); // 데이터가 invalidate 되어 새로 불러와짐
            alert("업데이트 완료!")
        },
        onError: () => {
            alert("업데이트 실패!")
        }, 
        onSettled: () => {
            alert("아무튼 완료!")
        }
    })
}

export default useUpdateCompleted;