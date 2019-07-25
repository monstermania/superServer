const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: 1
    },

    age:{
        type:Number,
        required: true,
     },

    ifFun : {
        type: Boolean,
        required: false
    },

    createdAt : {
        type: Date, 
        default : Date.now 
    }
});

const Person = mongoose.model('Person', PersonSchema)

//

module.exports = Person;