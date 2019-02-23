const Koa = require('koa')
const app = new Koa()
app.use(async ctx=>{
    let url = ctx.url
    let request = ctx.request
    let query = request.query
    let query_str = request.querystring
    ctx.body = {
        url,
        query,
        query_str
    }
})
app.listen(8080,()=>{
    console.log('app is listen at 8080')
})