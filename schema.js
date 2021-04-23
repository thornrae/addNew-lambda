'use strict';

const dynamoose = require('dynamoose');

//define schema

const homiesSchema = new dynamoose.Schema({
  id: String, 
  name: String,
  age: String, 
  fun: String
});

module.exports = dynamoose.model('homies', homiesSchema);