const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Roata para as tarefas");
  });

  router.get("/:id", (req, res) => {
    res.send("Rota para uma tarefa");
  });

  router.post("/new", (req, res) => {
    res.send("Rota para agregar tarefas");
  });

  router.put("/new", (req, res) => {
    res.send("Rota para modificar tarefas");
  });

  router.delete("/new", (req, res) => {
    res.send("Rota para deletar tarefas");
  });

  module.exports.router = router;