const Koa = require('koa')
const Router = require('koa-router') //路由中间件
const app = new Koa()
const router = new Router()
// 配置路由
router
  .get('/', (ctx, next) => {
    ctx.body = 'hello liuwei'
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'this page is todo page!'
  })
//
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server listen at 3000')
})