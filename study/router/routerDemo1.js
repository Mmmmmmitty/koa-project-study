const Koa = require('koa')
const app = new Koa
app.use(async (ctx)=>{
  let url = ctx
  ctx.body = url
})
app.listen(3000,()=>{
  console.log('server listen at 3000')
})