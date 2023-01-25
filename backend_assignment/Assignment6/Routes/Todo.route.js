const { Router } = require("express");
const { gettodo, posttodo, deletetodo, puttodo } = require("../connection/todo.connection");
const { Todomodel } = require("../Model/todo.model");

const TodoRouter = Router();

TodoRouter.get("/",gettodo );
TodoRouter.post("/todo", posttodo);
TodoRouter.delete("/todo/:id", deletetodo);

TodoRouter.put("/todo/:id", puttodo);
module.exports = { TodoRouter };
