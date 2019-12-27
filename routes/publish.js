const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/publish')

router.post('/article', async (ctx, next) => {
  let params = ctx.request.body;
  await query($sql.publish.article, params).then(res => {
    ctx.body = res
  })
})

router.post('/active', async (ctx, next) => {
  let params = ctx.request.body;
  await query($sql.publish.active, params).then(res => {
    ctx.body = res
  })
})

module.exports = router