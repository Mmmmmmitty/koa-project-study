const Koa = require('koa')
const app = new Koa()
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
    let postData = await parsePostData(ctx)
    ctx.body = postData
  }else{
    ctx.body = `<h1>404</h1>`
  }
})
// 处理post请求传过来的参数
function parsePostData(ctx){
  return new Promise((resolve,reject)=>{
    try {
      let postData = ""
      ctx.req.on('data',(data)=>{
        postData += data
      })
      ctx.req.on('end',()=>{
        let postDataJson = parsePOstDataToJson(postData)
        resolve(postDataJson)
      })
    } catch (error) {
      reject(error)
    }
  })
}
// post 请求接受参数转json对象
function parsePOstDataToJson(postData){
  let postDataJson = {}
  let postDataList = postData.split('&')
  for(let [index,item] of postDataList.entries()){
    let postDataJsonList = item.split('=')
    console.log(postDataJsonList)
    postDataJson[postDataJsonList[0]] = decodeURIComponent(postDataJsonList[1])
  }
  console.log(postDataJson)
  return postDataJson
}
app.listen(8080,()=>{
  console.log('listen at 8080')
})