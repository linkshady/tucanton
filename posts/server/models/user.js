var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  nombre: String,
  equipo_id: Number
}, { collection: 'users' });

var User = mongoose.model("User", UserSchema);
module.exports = User;