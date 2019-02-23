const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyparser())
app.use(async ctx=>{
  if(ctx.url === '/' && ctx.method == 'GET'){
    // 显示表单
    let html = `
      <h1>POST表单</h1>
      <form method="POST" action="/">
        <p>
          <span>username</span>
          <input type="text" name="username" />
        </p>
        <p>
          <span>password</span>
          <input type="text" name="password" />
        </p>
        <button type="submit">提交</button>
      </form>
    `
    ctx.body = html
  }else if(ctx.url === '/' && ctx.method == 'POST'){
    let postData = ctx.request.body
    ctx.body = postData
  }else{
    ctx.body = `<h1>404</h1>`
  }
})
app.listen(8080,()=>{
  console.log('listen at 8080')
})