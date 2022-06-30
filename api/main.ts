import { TodoType } from "../components/ListContainer";
import api from "./core/index";

export type UpdateData = {
    id : number | undefined,
    completed: boolean
}

const apis = {
    getTodos : () => api.get("/todos"),
    addTodo : (data : TodoType) => api.post("/todos", data),
    deleteTodo : (id : any) => api.delete(`/todos/${id}`, id),
    updateCompleted : (updateData : UpdateData) => api.patch(`/todos/${updateData.id}`, updateData)
}

export default apis;