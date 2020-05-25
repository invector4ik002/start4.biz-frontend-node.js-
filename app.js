const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 4000; 

async function start() { // функция обертка асинхронная 
   try {
      await mongoose.connect(config.get('mongoUri'),{ // подключение к базе данных "mongoDB"
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
      })
      app.listen(PORT, () => { // работа на порту (4000)
         console.log(`Work: ...serwer ${PORT}`)
      })
   } catch (err) {
      process.exit(1)
   }
}
start();
