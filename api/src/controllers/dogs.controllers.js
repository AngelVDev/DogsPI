require("dotenv").config();
const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { Op, UUIDV4 } = require("sequelize");
const router = Router();
const axios = require("axios");
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
        id: dog.id,
        height: dog.height.metric,
        // Minheight: dog.height.metric.split("-")[0],
        // Maxheight: dog.height.metric.split("-")[1]
        //   ? dog.height.metric.split(" - ")[1]
        //   : Math.round(dog.height.metric.split(" - ")[0] * 1.1),
        weight: dog.weight.metric,
        // Minweight: dog.weight.metric.split("-")[0],
        // Maxweight: dog.weight.metric.split("-")[1]
        //   ? dog.weight.metric.split(" - ")[1]
        //   : "39",
        lifespan: dog.life_span,
        temperament: dog.temperament,
        image: dog.image.url,
      };
    });
    return Doge, res.send(Doge);
  } catch (error) {
    console.log("PARAGUAAAAYO");
  }
};

router.get("/dogs?name=", async (req, res) => {
  let DogeApiInfo = await API();
  //esperamos la api
  //pasamos el query
  let { name } = req.query;
  let full = await Dog.findAll();
  if (!full.length) {
    await Dog.bulkCreate(DogeApiInfo);
    //pasamos toda la ruta a la base de datos
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
      let full = await Dog.findAll();
      res.status(200).send(full);
      return;
    }
  } catch (error) {
    console.log(error, "El error más IMPRUDENTE");
    return;
  }
});

const createFido = async (req, res) => {
  let {
    id,
    name,
    height,
    weight,
    lifespan,
    image,
    temperament,
    Maxheight,
    Minheight,
    Maxweight,
    Minweight,
  } = req.body;
  try {
    let createdDoge = await Dog.create({
      id: "D" + id,
      name,
      height,
      Maxheight,
      Minheight,
      Maxweight,
      Minweight,
      weight,
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

const DogeID = async (req, res) => {
  let { id } = req.params;
  try {
    let doge = await Dog.findByPk(id, { include: [Temperament] });
    if (doge) {
      res.send(doge);
    } else {
      res.status(404).send("NOT A DOGE-ID");
    }
  } catch (err) {
    console.log({ msg: err });
  }
};
router.get("/dogs", API);
router.get("/dogs/:id", DogeID);
router.post("/dogs", createFido);

module.exports = router;
