const router = require('koa-router')()
const sql = require('../config/default')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/getData', async (ctx,next) => {

    // 注意这里，因为是异步，所以要这样写才可以取到值。
    var tmp = await sql.query("select * from rg_document").then(function(result) {
        console.log(result);
        return result;
    }, function(error){
        return -1;
    });
    // ctx.response.type = 'application/json';
    ctx.body = tmp;
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }

})

module.exports = router
