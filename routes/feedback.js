const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/feedback')

// 写反馈
router.post('/insert_comment', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.feedback.insert_comment, params).then(res => {
        ctx.body = res
    })
})

// 获取 更多
router.get('/more', async (ctx, next) => {
    let params = ctx.request.query;
    await query(`${$sql.feedback.more} ${params[0]} , ${params[1]};`).then(res => {
        ctx.body = res
    })
})

// 删评论
router.get('/del', async (ctx, next) => {
    let params = ctx.request.query.comment_id;
    await query($sql.feedback.del, params).then(res => {
        ctx.body = res
    })
})

module.exports = router