let mongodb = require('mongodb').MongoClient

let connection = 'mongodb://localhost:27017/myfirstdb'

mongodb
  .connect(connection)
  .then(db => {
    console.log('MongoDB up and running')

    let cats = db.collection('cats')

    // cats.insertMany([
    //     { name: 'Ivan' },
    //     { name: 'Gosho' }
    // ])
    cats.find({
      name: 'Ivan'
    })
      .toArray()
      .then(result => {
        console.log(result)
      })
  })
  .catch(console.log)
