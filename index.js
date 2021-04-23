'use strict';

const uuid = require('uuid').v4;

const homiesModel = require('./schema.js');

exports.handler = async (event) => {
  console.log(event);

  try {
    const body = JSON.parse(event.body);

    // const name = body.name;
    // const age = body.age;
    // const fun = body.fun
    
    const { name, age, fun } = body;
    const id = uuid();

    const record = new homiesModel( {id, name, age, fun} )
    const data = await record.save();
    // const savedRecord = 

    console.log('DATA SAVED', data);
    return {
      statusCode: 201, 
      body: JSON.stringify(data)
    }

  } catch(e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }

  

  
}