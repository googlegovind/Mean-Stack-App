var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  lat: String,
  lng: String,
});

module.exports = {
  Location : mongoose.model('Location', locationSchema)
}
