const { Router } = require("express");
const { Dog, Temperaments } = require("../db");
const router = Router();
const axios = require("axios");

const API = async () => {
  try {
    const URL = await axios.get("https://api.thedogapi.com/v1/breeds");
    const Doge = await URL.data.map((dog) => {
      return {
        name: dog.name,
        id: dog.id,
        height: dog.height["metric"],
        weight: dog.weight["metric"],
        lifespan: dog.life_span,
        image: dog.image.url,
      };
    });
    return Doge;
  } catch (error) {
    return console.log("Perro, sos un pelotudo");
  }
};
router.get("/dogs", API);

module.exports = router;
