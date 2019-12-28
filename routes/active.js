const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/active')

// 获取 更多 活动
router.get('/', async (ctx, next) => {
    let params = ctx.request.query;
    await query(`${$sql.active.more} ${params[0]} , ${params[1]};`).then(res => {
        ctx.body = res
    })
})


module.exports = router