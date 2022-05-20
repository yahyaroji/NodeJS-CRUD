const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");

//ketika browser dibuka dengan link /hero
router.get("/", (request, response) => {
  Hero.getHero(response);
});

router.get("/:id", (request, response) => {
  //console.log("request hero by id", request.params.id); //ke terminal
  //response.send("request hero by id diterima: " + request.params.id); //ke web
  const id = request.params.id;
  Hero.getHeroById(id, response);
});

router.post("/update", (request, response) => {
  const data = {
    id: request.body.id,
    name: request.body.hero,
    role: request.body.role,
    skill: request.body.skill,
  };
  Hero.updateHeroById(data, response);
});

router.post("/add", (request, response) => {
  const data = {
    name: request.body.name,
    role: request.body.role,
    skill: request.body.skill,
  };
  Hero.addHero(data, response);
});

router.post("/remove", (request, response) => {
  const id = request.body.id;
  Hero.removeHero(id, response);
});

module.exports = router;
