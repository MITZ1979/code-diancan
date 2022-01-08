const Koa = require('koa')
const app = new Koa()
const json =require('koa-json')
const bodyParser =require('koa-bodyparser')
const router =require('koa-router')()
const cors =require('koa2-cors')

app.use(cors())
app.use(json())
app.use(bodyParser())
/* 启动路由 */
app.use(router.routes()).use(router.allowedMethods())
// 自定义启动端口6000
app.listen(5000)
console.log('sussess') 