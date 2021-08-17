const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ankitKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Confirmation if mongoose is connected to nodejs
// db.once('open', function() {
//   // we're connected!
//   console.log("We r connected")
// });

// Declaring a schema
var kittySchema = new mongoose.Schema({
  name: String
});
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  // console.log(greeting);
}

// Making a model out of the schema
var Kitten = mongoose.model('Kitten', kittySchema);

// Creating an object
var silentKitty = new Kitten({ name: 'Chupchap' });
// console.log(silentKitty.name);
// silentKitty.speak();

// saving entity to a collection with plural name of the given model name
silentKitty.save(function (err, element) {
  if (err) return console.error(err);
  // element.speak();
});

// Find
Kitten.find({name: "Chupchap"}, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})