import { create, get, updateId, delected, getString } from "../controller/mamifero.controller";

const mamiferoRoutes = (app:any) => {
    app.post("/post", create);
    app.get("/get", get);
    app.get("/getstring", getString);
    app.put("/put/:id", updateId);
    app.delete("/delete/:id", delected);
}

export default mamiferoRoutes;