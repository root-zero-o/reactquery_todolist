import { TodoType } from "../components/ListContainer";
import api from "./core/index";

const apis = {
    getTodos : () => api.get("/todos"),
    addTodo : (data : TodoType) => api.post("/todos", data),
    deleteTodo : (id : any) => api.delete(`/todos/${id}`, id)
}

export default apis;