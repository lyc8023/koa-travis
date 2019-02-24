const mongoose = require('mongoose')

let testSchema = new mongoose.Schema({
  userName: String,
  age: Number
})

// 通过
module.exports = mongoose.model('TestData', testSchema)