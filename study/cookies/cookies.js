const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.cookies.set(
      'name', 'my name is cookies!',
      {
        // domain：写入cookie所在的域名
        // path：写入cookie所在的路径
        // maxAge：Cookie最大有效时长
        // expires：cookie失效时间
        // httpOnly:是否只用http请求中获得
        // overwirte：是否允许重写
        domain: '127.0.0.1',
        path: '/',
        maxAge: 1000*60*60,
        expires: new Date('2019-2-24'),
        httpOnly: false,
        overwrite: false
      }
    )
    ctx.body = 'cookies was seted!'
  })
  .get('/index', async (ctx, next) => {
    let cookies = ctx.cookies.get('name')
    ctx.body = cookies
  })
app.use(router.routes()).use(router.allowedMethods())
app.listen('666', () => {
  console.log('server listen at 666')
})