//el metodo Router nos permite crear rutas
const router = require("express").Router();
const {getTasks,postTasks,putTasks,deleteTasks}=require("../controllers/task.controllers")
//router.get("/",getTask)
//ruta para obtener todas las tareas
router.get("/task",getTasks)
//crear nueva tarea
router.post("/task",postTasks)
//editar tarea requiere id de tarea
router.put("/task/:id",putTasks)
//eliminar tarea
router.delete("/task/:id",deleteTasks)
// se exporta el objeto router que contiene todas las rutas
module.exports = router;