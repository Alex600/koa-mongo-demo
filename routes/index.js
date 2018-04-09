const Router = require('koa-router')
const article = require('../controllers/article')


// Создать роутер
const router = new Router()


// Главная
router.get('/', async ctx => {
	ctx.body = {
		message: 'KoaJS MongoDB exemple'
	}
})

// CRUD API Articles
router
	.get('/articles', article.getArticles)         // Get articles
  .post('/articles', article.createArticle)      // Post article
	.get('/articles/:id', article.getArticleId)    // Get article
  .put('/articles/:id', article.updateArticle)   // Put article
	.del('/articles/:id', article.deleteArticle)   // Delete article

module.exports = router