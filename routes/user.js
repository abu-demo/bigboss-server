const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')
const fs = require('fs')

router.prefix('/user')

// 个人信息
router.get('/', async (ctx, next) => {
    let param = ctx.request.query.id;
    await query($sql.user.personal, param).then(res => {
        if (res.length == 0) {
            // 账号密码不匹配
            ctx.status = 404;
            ctx.body = '用户不存在！';
        } else {
            ctx.body = res
        }
    })
})

// 上传头像
router.post('/upload', async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.body);
    const reader = fs.createReadStream(file['image']['path']);
    let file_path = 'image/user/logo' + `/${files['image']['name']}`;
    let remote_file_path = `http://39.107.234.105:8088/img/user/logo` + `/${files['image']['name']}`;
    const upStream = fs.createWriteSteam(file_path);
    reader.pipe(upStream);
    return ctx.body = {
        url: remote_file_path,
        message: '头像上传成功！',
        cc: 0
    }
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