const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/user')

// 个人信息
router.get('/personal', async (ctx, next) => {
    let param = ctx.request.query.id;
    await query($sql.user.personal, param).then(res => {
        ctx.body = res
    })
})

// 注册
router.post('/register', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.user.register, params).then(res => {
        ctx.body = res
    })
})

module.exports = router