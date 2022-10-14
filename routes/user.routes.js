//el metodo Router nos permite crear rutas
const router = require("express").Router();
const {getUsers,postUser,putUser,deleteUser}=require("../controllers/user.controllers.js")

const esAdmin = require('../src/middlewares/es-admin');
const validarJWT = require('../src/middlewares/validar-jwt');
//ruta para obtener todos los usuarios
router.get("/user",[validarJWT],getUsers)
//crear nuevo usuario
router.post("/user",postUser)
//editar usuario requiere id de usuario

router.put("/user/:id",putUser)
//eliminar usuario
router.delete("/user/:id",[],deleteUser)
// se exporta el objeto router que contiene todas las rutas
module.exports = router;