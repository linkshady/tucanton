const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/client');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

var client = require("../models/client");
var equipment = require("../models/equipment");
var user = require("../models/user")

app.post('/posts', (req, res) => {
  var db = req.db;
  var id = req.body.id;
  var usuario_id = req.body.usuario_id;
  var email = req.body.email;

  var new_client = new client({
    id: id,
    usuario_id: usuario_id,
    email: email
  })

  new_client.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: ' El cliente fue agregado'
    })
  })
})

app.get('/posts', (req, res) => {
  console.log(req);
  client.find({}, function (error, clients) {
    if (error) { console.error(error); }
    res.send({
      clients: clients
    })
  })
})


app.post('/equipment', (req, res) => {
  var db = req.db;
  var id = req.body.id;
  var nombre = req.body.nombre;

  var new_equipment = new equipment({
    id: id,
    nombre: nombre
  })

  new_equipment.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: ' El equipo fue agregado'
    })
  })
})

app.get('/equipment', (req, res) => {
  equipment.find({}, function (error, equipments) {
    if (error) { console.error(error); }
    res.send({
      equipments: equipments
    })
  })
})


app.get('/equipment/:id', (req, res) => {
  var db = req.db;
  var idToSearch = req.params.id
  user.find({ equipo_id: idToSearch }, function (error, equipments) {
    if (error) { console.error(error); }
    res.send(equipments)
  })
})

app.get('/clientes/:equipo_id/:usuario_id', (req, res) => {
  var db = req.db;
  var equipo_id = req.params.equipo_id;
  var usuario_id = req.params.usuario_id;
  user.find({ id: usuario_id, equipo_id: equipo_id }, function (error, user) {

    if (error) { console.error(error); }

  }).then(function (user) {
    if (user.length == 0) {
      res.send("No hay clientes")
    } else {
      client.find({ usuario_id: usuario_id }, function (error, clients) {
        if (error) { console.error(error); }
        res.send(clients);
      })
    }

  })
})
app.listen(process.env.PORT || 8081)