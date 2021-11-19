const express = require("express");

const app = express();
const port = 8000;

const taskRouter = require("./routes/tasks");
const Task = require("./models/task");

app.use(express.json());
app.use("/tasks", taskRouter.router);

/* app.get("/teste", (req, res) => {
  res.send("Hello World");
}); */

app.listen(port, () => {
  console.log(`Iniciando na porta http://localhost:${port}`);
});