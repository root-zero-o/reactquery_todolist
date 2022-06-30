import api from "./core/index";

const apis = {
    getTodos : () => api.get("/todos")
}

export default apis;