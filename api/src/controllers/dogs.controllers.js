require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament, Dog_Temps } = require("../db");
const { Op, UUIDV4 } = require("sequelize");
const router = Router();
const axios = require("axios");
// const Dog_Temps = require("../models/Dog_Temps");
const API_KEY = process.env;

// const dog = require("./dog");

const API = async (req, res) => {
  const URL = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );

  try {
    const Doge = await URL.data?.map((dog) => {
      return {
        name: dog.name,
        height: dog.height.metric,
        weight: dog.weight.metric,
        lifespan: dog.life_span,
        temperament: dog.temperament,
        image: dog.image.url,
      };
    });
    return Doge;
  } catch (error) {
    console.log("Estela Máris");
  }
};

router.get("/dogs", async (req, res) => {
  let DogeApiInfo = await API();
  // console.log(DogeApiInfo);
  //esperamos la api
  //pasamos el query
  let { name } = req.query;
  try {
    let full = await Dog.findAll({ include: "tempsDb" });
    if (!full.length) {
      await Dog.bulkCreate(DogeApiInfo);
      //pasamos toda la ruta a la base de datos
    }
    if (name) {
      let DogName = await Dog.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name.toLowerCase()}%`,
          },
        },
      });
      DogName.length
        ? res.status(200).send(DogName)
        : res.status(404).send("Can't find dog");
    } else {
      let full = await Dog.findAll({ include: "tempsDb" });
      res.status(200).send(full);
      return;
    }
  } catch (error) {
    console.log({ msg: error });
    return;
  }
});

const createFido = async (req, res) => {
  let { name, height, weight, lifespan, image, temperament } = req.body;
  try {
    let createdDoge = await Dog.create({
      name,
      height,
      weight,
      lifespan: lifespan + " years",
      image,
    });
    // let dbTemp = await Temperament.findAll({
    //   where: {
    //     name: temperament,
    //   },
    // });
    // createdDoge.addTemperament(dbTemp);
    res.status(201).send("Pichicho created");
  } catch (error) {
    console.log(error);
  }
};

const DogeID = async (req, res) => {
  let { id } = req.params;
  try {
    let doge = await Dog.findByPk(id, { include: "tempsDb" });
    if (doge) {
      res.send(doge);
    } else {
      res.status(404).send("NOT A DOGE-ID");
    }
  } catch (err) {
    console.log({ msg: err });
  }
};
// router.get("/dogs", API);
router.get("/dogs/:id", DogeID);
router.post("/dogs", createFido);

module.exports = router;
