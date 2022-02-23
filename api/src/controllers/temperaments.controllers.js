const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();
const axios = require("axios");
const { api_key } = process.env;
