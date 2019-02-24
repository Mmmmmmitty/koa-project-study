const Koa = require('koa')
const Router = require('koa-router') //路由中间件
const app = new Koa()
let router = new Router();
router
  .get('/', async (ctx, next) => {
    ctx.body = 'this is homepage!'
  })
// 子路由
let home = new Router()
home
  .get('/', async (ctx) => {
    ctx.body = 'this is home!'
  })
  .get('/homeChildOne', async (ctx) => {
    ctx.body = 'this is home child one!'
  })
  .get('/homeChildTwo', async (ctx) => {
    ctx.body = 'this is home child two!'
  })
// 子路由
let page = new Router()
page
  .get('/', async (ctx) => {
    ctx.body = 'this is page!'
  })
  .get('/pageChildOne', async (ctx) => {
    ctx.body = 'this is page child one!'
  })
  .get('/pageChildTwo', async (ctx) => {
    ctx.body = 'this is page child two!'
  })
// 装载子路由
router.use('/home', home.routes(), home.allowedMethods()) //子路由
router.use('/page', page.routes(), page.allowedMethods()) //子路由
// 加载路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server listen at 3000')
})