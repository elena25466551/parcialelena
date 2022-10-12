const express = require("express");//instalo libreria express (instalo servidor)
const app = express();//instalo servidor
app.use(express.json()); //permite usar archivos json
// permite al servidor conectarse a la BD
const ConexionBD = require("./bd/conexionbd")
ConexionBD();
const port=3000;//guardo en una variable el puerto del servidor
//conecta el servidor al puerto en mi caso 3000
app.use(require("./routes/task.routes.js"))
app.use(require("./routes/user.routes.js"))//busco esa carpeta para usarla
app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})