const express = require("express");//instalo libreria express (instalo servidor)
const app = express();//instalo servidor
app.use(express.json()); //permite usar archivos json
// permite al servidor conectarse a la BD
const ConexionBD = require("./bd/conexionbd")
ConexionBD();
//permite utilizar rutas de carpetas independientemente de las barras
const path = require("path")
app.set("/views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
const port=3000;//guardo en una variable el puerto del servidor
//conecta el servidor al puerto en mi caso 3000
app.use(require("./routes/task.routes.js"))
app.use(require("./routes/user.routes.js"))//busco esa carpeta para usarla
app.use(require("./routes/home.routes.js")) 
require("ejs")
app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})