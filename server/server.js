require('./config/config')

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
  extended: false
}));
//parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello World");
});
app.post("/usuario", (req, res) => {
  let body = req.body;
  res.json({
    persona: body
  });
});
app.put("/usuario/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    id
  });
});
app.delete("/usuario/:id", (req, res) => {
  let id = req.params.id;
  res.json("post World");
});

app.listen(process.env.PORT, () => console.log(`Escuchando por el puerto ${process.env.PORT }`));