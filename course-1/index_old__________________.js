const mongoose = require('mongoose')
const connection = 'mongodb://localhost:27017/mongoosedb'
mongoose.Promise = global.Promise

let catSchema = new mongoose.Schema({
  name: String,
  age: Number
})

catSchema.methods.sayHello = () => {
  console.log('Myao')
}

catSchema.path('name').validate(value => {
  return value !== 'Pesho'
}, 'Sorry, name Pesho is not valid')

let Cat = mongoose.model('Cat', catSchema)

mongoose
  .connect(connection)
  .then(() => {
    console.log('Up and running!')

    new Cat({
      name: 'Blalalala',
      age: 5
    })
    .save()
    .catch(err => {
      console.log(err.errors.name.message)
    })
    .then(cat => {
      console.log(cat)
    })
  })
