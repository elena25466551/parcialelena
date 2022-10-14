const express = require("express");//instalo libreria express (instalo servidor)
const app = express();//instalo servidor
app.use(express.json()); //permite usar archivos json
// permite al servidor conectarse a la BD
const ConexionBD = require("./bd/conexionbd")
ConexionBD();
//permite utilizar rutas de carpetas independientemente de las barras
const path = require("path")
//
const cors = require('cors');
//
const morgan = require('morgan')

app.set("/views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
// Configuraciones
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));

// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

app.use(require("./routes/task.routes.js"))
app.use(require("./routes/user.routes.js"))//busco esa carpeta para usarla
app.use(require("./routes/home.routes.js")) 
app.use(require('./routes/auth.routes.js')); 
require("ejs")
app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})