const mongoose = require('mongoose')
const connection = 'mongodb://localhost:27017/mongoosedb'
mongoose.Promise = global.Promise

let catSchema = new mongoose.Schema({
  name: String,
  age: Number
})

let Cat = mongoose.model('Cat', catSchema)

let Owner = mongoose.model('Owner', {
  username: { type: String, required: true }
})

mongoose
  .connect(connection)
  .then(() => {
    console.log('Up and running!')

    new Cat({
      name: 'ggggg',
      age: 5,
      owners: [Owner.schema]
    })
    .save()
    .catch(console.log)
    .then(console.log)

    new Owner({
      username: 'Test'
    })
    .save()
    .catch(console.log)
    .then(console.log)
  })
