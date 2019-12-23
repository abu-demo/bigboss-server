const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/detail')

// 获取 文章
router.get('/', async (ctx, next) => {
    let param = ctx.request.query.id
    await query($sql.detail.get_artical, param).then(res => {
        if (res.length == 0) {
            // 账号密码不匹配
            ctx.status = 404;
            ctx.body = '文章不存在！';
        } else {
            ctx.body = res
        }
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

// 删评论
router.get('/delete_comment', async (ctx, next) => {
    let params = ctx.request.query.id;
    await query($sql.detail.delete_comment, params).then(res => {
        ctx.body = res
    })
})

// 删文章
router.get('/delete_article', async (ctx, next) => {
    let params = ctx.request.query.id;
    await query($sql.detail.delete_article, params).then(res => {
        ctx.body = res
    })
})

module.exports = router