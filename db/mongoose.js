// const quotes = [
//     {quote: 'Hello!', id: 1}
// ];

// module.exports = quotes;

// console.log(`Connected to the database`);
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://zeeshan:thereaper@dsbd-klbca.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, {useNewUrlParser: true, useFindAndModify: false})
.then(() =>{
    console.log(`Successfuly connected to MongoDB Atlas!`)
})

.catch((error) =>{
    console.log(`Unable to connect to MongoDB Atlas!`)
    console.lgo(error);
})

module.exportss = mongoose;