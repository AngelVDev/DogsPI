const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();
const axios = require("axios");
const { api_key } = process.env;
// const dog = require("./dog");

const API = async () => {
  try {
    const URL = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${api_key}`
    );
    const Doge = await URL.data.map((dogge) => {
      return {
        name: dogge.name,
        id: dogge.id,
        height: dogge.height[1],
        weight: dogge.weight[1],
        lifespan: dogge.life_span,
        image: dogge.image[3],
      };
    });
    return console.log(Doge);
  } catch (error) {
    return console.log({ msg: error });
  }
};

router.get("/dogs", API);

module.exports = router;
