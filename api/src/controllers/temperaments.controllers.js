const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();
const axios = require("axios");

const API = async (req, res) => {
  let URL = await axios.get(`https://api.thedogapi.com/v1/breeds/`);
  let Temps = URL.data.map((item) => item.temperament).toString();
  Temps = await Temps.split(",");
  const TempsU = await Temps.map((item) => {
    if (item[0] == " ") {
      return item.split("");
    }

    return item;
  });
  const TempsW = await TempsU.map((item) => {
    if (Array.isArray(item)) {
      item.shift();
      return item.join("");
    }
    return item;
  });
  await TempsW.forEach((element) => {
    if (element != "") {
      Temperament.findOrCreate({
        where: {
          name: element,
        },
      });
    }
  });
  const allTemps = await Temperament.findAll();
  res.status(200).send(allTemps);
};

router.get("/temperaments", API);
module.exports = router;
