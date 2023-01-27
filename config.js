const mongoose = require('mongoose')

async function connectDb() {
  try {
    mongoose.set('strictQuery', true)
  await mongoose.connect("mongodb+srv://uglymallu:123@cluster0.jonxpqi.mongodb.net/job-portal?retryWrites=true&w=majority")
    console.log("db connected")
  } catch (error) {
    console.log("db error");
  }

}

module.exports = connectDb