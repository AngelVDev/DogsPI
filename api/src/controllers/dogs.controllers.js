const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { Op, UUIDV4 } = require("sequelize");
const router = Router();
const axios = require("axios");

// const dog = require("./dog");

const API = async (req, res) => {
  try {
    const URL = await axios.get("https://api.thedogapi.com/v1/breeds/");
    const Doge = await URL.data.map((dog) => {
      return {
        name: dog.name,
        id: dog.id,
        hmin: dog.height.metric.split("-")[0],
        hmax: dog.height.metric.split("-")[1]
          ? dog.height.metric.split(" - ")[1]
          : Math.round(dog.height.metric.split(" - ")[0] * 1.1),
        weMi: dog.weight.metric.split("-")[0],
        weMa: dog.weight.metric.split("-")[1]
          ? dog.weight.metric.split(" - ")[1]
          : "39",
        lifespan: dog.life_span,
        temperament: dog.temperament ? dog.temperament : null,
        image: dog.image.url,
      };
    });
    return Doge;
  } catch (error) {
    return console.log(error);
  }
};
router.get("/dogs", async (req, res) => {
  let Doge = await API();
  //esperamos la api
  //pasamos el query
  let { name } = req.query;
  try {
    let full = await Dog.findAll({ include: { model: Temperament } });
    if (!full.length) {
      await Dog.bulkCreate(Doge);
      //pasamos toda la ruta a la base de datos
    }
  } catch (error) {
    res.send(error);
  }
  try {
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
      let full = await Dog.findAll({
        include: { model: Temperament },
      });
      res.status(200).send(full);
    }
  } catch (error) {
    console.log(error, "El error más IMPRUDENTE");
  }
});

const DogeID = async (req, res) => {
  const { id } = req.params;
  let dog = await Dog.findByPk(id, {
    include: {
      model: Temperament,
    },
  });
  if (dog) return res.status(200).send(dog);
  else return res.status(404).send("No such doge-ID");
};
const createFido = async (req, res) => {
  let { name, hmin, hmax, weMi, weMa, lifespan, image, temperament } = req.body;
  try {
    let createdDoge = await Dog.create({
      name,
      hmin,
      hmax,
      weMi,
      weMa,
      lifespan: lifespan + " years",
      image,
    });
    let dbTemp = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });
    createdDoge.addTemperament(dbTemp);
    res.status(201).send("Pichicho created");
  } catch (error) {
    console.log(error);
  }
};
// router.get("/pepo", API);
router.get("/dogs/:id", DogeID);
router.post("/dogs", createFido);

module.exports = router;
