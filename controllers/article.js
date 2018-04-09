const Article = require('../models/Article')

// Все статьи
exports.getArticles = async ctx => {
  try {
    let articles = await Article.find({}).exec()
    ctx.body = { message: articles }

  } catch(err) {
    ctx.boby = { error: err }
  }
}

// Создать статью
exports.createArticle = async ctx => {
  let body = ctx.request.body
  
  let article = new Article({
    title: body.title,
    content: body.content
  })

  try {
	  let newArticle = await article.save()
    ctx.body = { message: 'Article created!' }

  } catch(err) {
    ctx.boby = { error: err }
  }
}

// Найти статью по id
exports.getArticleId = async ctx => {
  let id = ctx.params.id

  try {
    let article = await Article.findById(id)

    if (!article)
      ctx.body = { error: 'No article with the given ID'}
    else 
      ctx.body = { message: article }

    } catch(err) {
    ctx.boby = { error: err }
  }
}

// Обновить статью по id
exports.updateArticle = async ctx => {
  let id = ctx.params.id
  let body = ctx.request.body
  
  try {
    let article = await Article.findByIdAndUpdate(id, { title: body.title }, { new: true })

    if (!article)
      ctx.body = { error: 'No task with the given ID' }
    else
      ctx.body = { message: 'Article updated!' }

    } catch(err) {
    ctx.boby = { error: err }
  }
}

// Удалить статью по id
exports.deleteArticle = async ctx => {
  let id = ctx.params.id  

  try {
    let article = await Article.findByIdAndRemove(id)

    if (!article)
      ctx.body = { error: 'No task with the given ID' }
    else
      ctx.body = { message: 'Article deleted!' }

    } catch(err) {
      ctx.boby = { error: err }
  }
}