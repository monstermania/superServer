const mongoose = require('./db/mongoose')

const Person = require('./models/person')

var person = new Person({
    name:"Larry",
    age: 23,
    ifFun: false
});

person.save();