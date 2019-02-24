const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const app = new Koa()
const router = new Router()

// 配置路由
router
  .get('/', async ctx => {
    let title = 'homepage !!!'
    await ctx.render('index', {
      title
    })
  })
  .get('/first', async ctx => {
    let title = 'first page !!!'
    await ctx.render('first',{
      title
    })
  })
  .get('/second', async ctx => {
    let title = 'second page !!!'
    await ctx.render('second',{
      title
    })
  })
// 加载模板引擎
app.use(views(path.join(__dirname, '../../views'), {
  extension: 'ejs'
}))
app.use(static(path.join(__dirname,'../../static'))) // 配置静态文件访问
app.use(router.routes()).use(router.allowedMethods())
app.listen(8020, () => {
  console.log('server is listen at 8020')
})