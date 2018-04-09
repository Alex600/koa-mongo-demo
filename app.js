const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

// Роутер
const router = require('./routes')

// Настройки соединения с MongoDB
mongoose.Promise = global.Promise

mongoose.connect('mongodb://mongo:27017/article')
.then(() => {
  console.log('Successfully connected to the database')
}).catch(err => {
  console.log('Could not connect to the database')
})


// Создать приложение
const app = new Koa()

// Прослушиваемый порт
const port = process.env.PORT || 3000

// Настройки приложения 
app
	.use(bodyParser())
	.use(router.routes()).use(router.allowedMethods())
	.listen(port, () => {
		console.log(`Server running at http://localhost:${port}/`)
	})

mdoule.exports = app