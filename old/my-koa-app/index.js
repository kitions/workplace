const koa = require('koa')
const Router = require('koa-router')
const app = new koa()
const router = new Router()
const bodyParser = require('koa-bodyparser')

router.get('/',ctx =>{
    ctx.body = '这是主页'
})

router.get('/user', ctx => {
    ctx.body = `这是user页`
})

router.get('/post', ctx => {
    ctx.body = ctx.request.body
})
router.get('/async', async ctx =>{
    const sleep = async(ms)=>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(true)
            },ms)
        })
    }


    await sleep(5000)
    ctx.body = '异步加载'
})

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
// app.use(ctx =>{
//     ctx.body = `你的网址路径:  ${JSON.stringify(ctx.request)}`
// })

app.listen(3000)