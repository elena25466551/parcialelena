//el metodo Router nos permite crear rutas
const router = require("express").Router();
const {getUsers,postUser,putUser,deleteUser}=require("../controllers/user.controllers.js")

router.get("/",(req, res)=>{
    res.send("probando")
})
//ruta para obtener todos los usuarios
router.get("/user",getUsers)
//crear nuevo usuario
router.post("/user",postUser)
//editar usuario requiere id de usuario
router.put("/user",putUser)
//eliminar usuario
router.delete("/user",deleteUser)
// se exporta el objeto router que contiene todas las rutas
module.exports = router;