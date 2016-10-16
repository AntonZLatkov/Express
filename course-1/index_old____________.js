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

catSchema.virtual('introduction').get(function () {
  return this.name + ' ' + this.age
})

catSchema.virtual('introduction').set(function (value) {
  this._someRandomValue = value
})

let Cat = mongoose.model('Cat', catSchema)

mongoose
  .connect(connection)
  .then(() => {
    console.log('Up and running!')

    let cat = new Cat({
      name: 'ggggg',
      age: 5
    })
    cat.sayHello()
    cat.introduction = 'Something'
    console.log(cat.introduction)
  })
