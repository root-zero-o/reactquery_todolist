import { TodoType } from "../components/ListContainer";
import api from "./core/index";

export type UpdateData = {
    id : number | undefined,
    completed: boolean
} 
// updateData에는 id와 completed만 들어가서 타입을 따로 설정해줌
// 타입을 따로 모아두는 파일을 만들면 편할 것 같다.

const apis = {
    getTodos : () => api.get("/todos"),
    addTodo : (data : TodoType) => api.post("/todos", data),
    deleteTodo : (id : any) => api.delete(`/todos/${id}`, id),
    updateCompleted : (updateData : UpdateData) => api.patch(`/todos/${updateData.id}`, updateData)
}

export default apis;