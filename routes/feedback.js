const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/feedback')

// 获取 反馈
router.get('/', async (ctx, next) => {
    await query($sql.feedback.get).then(res => {
        ctx.body = res
    })
})

// 写反馈
router.post('/insert_comment', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.feedback.insert_comment, params).then(res => {
        ctx.body = res
    })
})

module.exports = router