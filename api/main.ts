import { TodoType } from "../types";
import api from "./core/index";

// updateData에는 id와 completed만 들어가서 타입을 따로 설정해줌
// 타입을 따로 모아두는 파일을 만들면 편할 것 같다.

const apis = {
    getTodos : () => api.get("/todos"),
    addTodo : (data : TodoType) => api.post("/todos", data),
    deleteTodo : (id : number | undefined) => api.delete(`/todos/${id}`),
    updateCompleted : (updateData : TodoType) => api.patch(`/todos/${updateData.id}`, updateData)
}

export default apis;