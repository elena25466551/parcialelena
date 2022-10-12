// El método Router() de Express nos permite crear rutas
const router = require('express').Router(); 

// Importando controladores
const {
    getHome,
    postHome,
    putHome,
    deleteHome
} = require('../controllers/home.controllers');

// Definiendo rutas
router.get('/', getHome);
router.get('/home', getHome);
router.get('/home', postHome);
router.put('/home', putHome);
router.delete('/home', deleteHome);

// Se exporta el objeto router que contiene las rutas
module.exports = router;