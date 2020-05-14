const { Router } = require("express");
const Joke = require("./model");
const router = new Router();

router.post("/joke", (req, res, next) => {
  console.log("this is a new joke", req.body);
  Joke.create(req.body)
    .then((joke) => res.json(joke))
    .catch(next);
});

router.get("/joke", (req, res, next) => {
  //console.log("this is a get call to find all jokes", res.body);
  Joke.findAll({
    attributes: ["setup", "punchline"],
    raw: true,
  })
    .then((joke) => {
      res.json(joke);
    })
    .catch(next);
});

router.delete("/joke/:id", (req, res, next) => {
  Joke.destroy({ where: { id: req.params.id } })
    .then((number) => res.send({ number }))
    .catch(next);
});

module.exports = router;
