const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')

router.prefix('/user')

// 个人信息
router.get('/', async (ctx, next) => {
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

// 登录
router.post('/login', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.user.login, params[0]).then(res => {
        console.log(res[0].password);
        if (params[1] == res[0].password) {
            ctx.body = res
        } else {
            // 账号密码不匹配
            ctx.status = 401;
            ctx.body = '账号密码不匹配！';
        }
    })
})

module.exports = router