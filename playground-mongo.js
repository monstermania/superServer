const mongoose = require('./db/mongoose')

const Person = require('./models/person')

// var person = new Person({
//     name:"Bruce Wayne",
//     age: 33,
//     ifFun: true
// });



// person.save();

//read /find documents
// const findDocs = async () => {
//     console.log(`Finding Documents in database`);

//     const results = await Person.find({ifFun: true});
    
//     console.log(results);
// }

// findDocs();

// 

//Delete documents

const deleteDocs = async () =>{
    console.log(`Deleting Documents in Database`)

    await Person.deleteMany({ifFun : false})
}

deleteDocs();