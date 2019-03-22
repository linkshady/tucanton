var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
  id: Number,
  nombre: String
}, { collection: 'equipments' });

var Equipment = mongoose.model("Equipment", EquipmentSchema);
module.exports = Equipment;