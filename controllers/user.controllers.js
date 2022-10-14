const User = require("../src/models/user");//requiero esquema de usuario
const encriptar = require("bcrypt")//guardo la libreria bcrypt que es para encriptar en una variable
const ctrlUser={};
//controlador para obtener todos los usuarios de la base de datos
ctrlUser.getUsers = async (req,res)=>{
    // consultan todos los documentos de la BD
    const users = await User.find();

//se devuelve al cliente un arreglo con todos los datos del usuario
return res.json(users)
};
//controlador para crear nuevo usuario en la BD
ctrlUser.postUser = async(req,res)=>{
    // se obtienen los datos enviados por el metodo POST
    const { username, password:contrasenarecibida, email, role, ...otherData } = req.body;
    //guardo en una variable la contraseña encriptada
const contrasenanueva=encriptar.hashSync(contrasenarecibida,10)
    //se instancia un nuevo documento MongoDB para luego guardarlo
    const newUser = new User({
        username,
        password:contrasenanueva,
        email,
        role,
        otherData
    });
    //se almacena en la BD con metodo asincrono .save
const user = await newUser.save()
//se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado
return res.json ({
    msg:"usuario creado correctamente",
    user
})
}
// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlUser.putUser = async (req,res)=>{
   const idusu= req.params.id // obtiene el valor del parametro del enlace
   const {username,password:contrasenarecibida,email, role}=req.body
   const contrasenanueva=encriptar.hashSync(contrasenarecibida,10)
   try{
    const usuactualizado = await User.findByIdAndUpdate(idusu,{username, password:contrasenanueva, email, role})
    return res.json({
        msg:" El usuario fue actualización con exito"
    }) 
   }
   catch(error){
    console.log(error)
    return res.json({
        msg:"Ocurrio un error"
    }) 
   }
};
//controlador para eliminar usuario requiere ID de usuario
ctrlUser.deleteUser = async(req,res)=>{
    const idusu= req.params.id
    
    try{
     const usueliminado = await User.findByIdAndUpdate(idusu,{active:false})
     return res.json({
         msg:" El usuario fue eliminado con exito"
     }) 
    }
    catch(error){
     console.log(error)
     return res.json({
         msg:"Ocurrio un error"
     }) 
    }
}
module.exports=ctrlUser;