const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/detail')

// 获取 文章
router.get('/', async (ctx, next) => {
    let param = ctx.request.query.id
    await query($sql.detail.get_artical, param).then(res => {
        ctx.body = res
    })
})

// 获取 评论
router.get('/comment', async (ctx, next) => {
    let param = ctx.request.query.id
    await query($sql.detail.get_comment, param).then(res => {
        ctx.body = res
    })
})

// 写评论
router.post('/insert_comment', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.detail.insert_comment, params).then(res => {
        ctx.body = res
    })
})

module.exports = router