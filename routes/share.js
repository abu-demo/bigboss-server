const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/share')

// 获取文章
router.get('/', async (ctx, next) => {
  await query($sql.share.get).then(res => {
    ctx.body = res
  })
})

// 获取 更多 文章
router.get('/more', async (ctx, next) => {
  let params = ctx.request.query;
  await query(`${$sql.share.more} ${params[0]} , ${params[1]};`).then(res => {
    ctx.body = res
  })
})

// 获取 文章 总数
router.get('/sum', async (ctx, next) => {
  await query($sql.share.sum_share).then(res => {
    ctx.body = res
  })
})

module.exports = router