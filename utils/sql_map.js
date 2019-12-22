let sql_map = {
    user: {
        personal: 'SELECT  id, name, role, sign, logo, education, contact, web FROM user where id = ?;',
        register: 'INSERT INTO `user` VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        login: 'SELECT  id, name, password, role, sign, logo, education, contact, web FROM user where id = ?;'
    },
    share: {
        get: 'SELECT id, title, summary, author, author_id, time, discuss FROM share order by id desc;',
    },
    feedback: {
        get: 'SELECT id, name, time, text FROM feedback order by id desc;',
        insert_comment: 'INSERT INTO `feedback` VALUES(0, ?, ?, ?);',
    },
    detail: {
        get_artical: 'SELECT * FROM share WHERE ID = ?;',
        get_comment: 'SELECT * FROM shareComment WHERE share_id = ? order by id desc;',
        insert_comment: 'INSERT INTO `shareComment` VALUES(0, ?, ?, ?, ?, ?);',
    },
    publish: {
        article: 'INSERT INTO `share` VALUES (0, ?, ?, ?, ?, 0, ?, ?);',
    }
}

module.exports = sql_map