const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");
const router = Router();
const axios = require("axios");

// const dog = require("./dog");

const API = async () => {
  try {
    const URL = await axios.get(`https://api.thedogapi.com/v1/breeds/`);
    const Doge = await URL.data.map((dog) => {
      return {
        name: dog.name,
        id: dog.id,
        hmin: dog.height.metric.split("-")[0],
        hmax: dog.height.metric.split("-")[1],
        weMi: dog.weight.metric.split("-")[0],
        weMa: dog.weight.metric.split("-")[1],
        lifespan: dog.life_span,
        image: dog.image.url,
      };
    });
    return Doge;
  } catch (error) {
    return console.log("No wei");
  }
};
router.get("/dogs", async (req, res) => {
  let Doge = await API();
  let { name } = req.query;
  try {
    let full = await Dog.findAll({
      include: {
        model: Temperament,
      },
    });
    console.log(full);
    if (!full.length) {
      await Dog.bulkCreate(Doge);
    }
  } catch (error) {
    console.log({ msg: error });
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
    let full = await Dog.findAll({
      include: { model: Temperament },
    });
    res.status(200).send(full);
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
  else return res.status(404).send("No doge");
};

router.get("/dogs/:id", DogeID);

module.exports = router;
