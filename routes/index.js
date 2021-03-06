const share = require('./share')
const publish = require('./publish')
const detail = require('./detail')
const feedback = require('./feedback')
const user = require('./user')
const active = require('./active')

module.exports = function (app) {
    app.use(share.routes(), share.allowedMethods())
    app.use(publish.routes(), publish.allowedMethods())
    app.use(detail.routes(), detail.allowedMethods())
    app.use(feedback.routes(), feedback.allowedMethods())
    app.use(active.routes(), active.allowedMethods())
    app.use(user.routes(), user.allowedMethods())
}