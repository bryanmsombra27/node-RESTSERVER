require('./config/config')

const express = require("express");
const mongoose = require('mongoose');
const app = express();

const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
  extended: false
}));
//parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

//Conectando con la base de datos:  el metodo connect puede recibir 3 parametros el primero es la ruta de la conexion hacia la base de datos(al estar de manera local es correcta esa ruta olo indicamos el puerto de conexion y el nombre de la bd a conectar)   
//Segundo parametro un objeto necesario para evitar futuros problemas de conexion en nuevas versiones de node y como tercer parametro (opcional) una callback en caso de que la conexion sea negativa tira un error de conexion o caso contrario indica que se ha conectado correctamente
mongoose.connect(process.env.URLDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true

}, (err, res) => {
  if (err) throw err;

  console.log('Conexion exitosa con la BD')
});

app.listen(process.env.PORT, () => console.log(`Escuchando por el puerto ${process.env.PORT }`));