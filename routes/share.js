const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')


router.get('/share', async (ctx, next) => {
  await query($sql.share.get).then(res => {
    ctx.body = res
  })
})

module.exports = router