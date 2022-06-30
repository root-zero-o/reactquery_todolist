import { TodoType } from "../components/ListContainer";
import api from "./core/index";

const apis = {
    getTodos : () => api.get("/todos"),
    addTodo : (data : TodoType) => api.post("/todos", data)
}

export default apis;