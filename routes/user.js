const router = require('koa-router')()
const $sql = require('../utils/sql_map')
const query = require('../utils/mysql')
const uploadImg = require('../uploadImg')

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

// 更改 个签
router.post('/sign', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.user.sign, params).then(res => {
        ctx.body = res
    })
})

// 更改 公告
router.post('/publish', async (ctx, next) => {
    let params = ctx.request.body;
    await query($sql.user.publish, params).then(res => {
        ctx.body = res
    })
})

// 更改 头像
router.post('/logo', async (ctx, next) => {
    // 上传单个文件
    let file = ctx.request.files.file; // 获取上传文件
    console.log(file);
    let uploadPath = uploadImg.logo(file) ? "上传成功！" : "上传失败！";
    // 修改数据库用户的logo地址指向 或者根据id获取logo的url 就不用存指向了.. 
    return ctx.body = {
        path: uploadPath,
    };
})

module.exports = router