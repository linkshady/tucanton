
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  id: Number,
  usuario_id: Number,
  email: String
});

var Client = mongoose.model("Client", ClientSchema);
module.exports = Client;