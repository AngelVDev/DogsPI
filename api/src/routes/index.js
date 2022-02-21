const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperaments } = require("../db");
const dogsRoute = require("./controllers/dogs.controllers.js");
const tempRoute = require("./controllers/temperaments.controllers.js");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", dogsRoute);
router.get("/", tempRoute);

module.exports = router;
