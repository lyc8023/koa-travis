const router = require('koa-router')()

// 引入mongoose模型
const TestData = require('../database/models/test')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  ctx.body = 'this is users page'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/info', async (ctx) => {
  let result = await TestData.find()

  ctx.body = {
    code: 0,
    result: result
  }
})

module.exports = router
