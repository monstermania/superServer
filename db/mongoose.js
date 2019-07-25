// const quotes = [
//     {quote: 'Hello!', id: 1}
// ];

// module.exports = quotes;

// console.log(`Connected to the database`);
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://zeeshan:thereaper@dsbd-klbca.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, {useNewUrlParser: true, useFindAndModify: false})
.then(() =>{
    console.log(`Successfuly fonnected to MongoDB Atlas!`)
})

.catch(() =>{
    console.log(`Unable to connect to MongoDB Atlas!`)
})