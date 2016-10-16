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
    console.log('Running!')
  })

Cat
  .findByIdAndUpdate('5803d4fe89feb423cb545e52', {
    $set: {age: 38, name: 'aaaaaa'}
  })
  .then(console.log)
