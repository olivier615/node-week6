const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

// const DB = process.env.DATABASE.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// )

mongoose.connect('mongodb://localhost:27017/week4')
  .then(() => console.log("連線資料成功"));