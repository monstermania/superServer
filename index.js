const connectionString = 'mongodb+srv://zeeshan:thereaper@dsbd-klbca.mongodb.net/test?retryWrites=true&w=majority'

const mongoose = require('mongoose'),
userSchema = require('./userSchema.js'),
User = mongoose.model('user', userSchema, 'user');

async function createUser(username) {
return new User({
username,
created: Date.now()
}).save()
}

async function findUser(username) {
return await User.findOne({ username })
}

;(async () => {
const connector = mongoose.connect(connectionString)
const username = process.argv[2].split('=')[1]
let user = await connector.then(async () => {
return findUser(username)
})
if (!user) {
user = await createUser(username)
}

console.log(user)
process.exit(0)
})()

