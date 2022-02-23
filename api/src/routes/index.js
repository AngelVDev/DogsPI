const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperament } = require("../db");
const dogsRoute = require("../controllers/dogs.controllers");
const tempRoute = require("../controllers/temperaments.controllers");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", dogsRoute);
// router.use("/temperaments", tempRoute);

module.exports = router;
