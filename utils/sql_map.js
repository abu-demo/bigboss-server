let sql_map = {
    user: {
        personal: 'SELECT  id, name, role, sign, logo, education, contact, web FROM `user` where id = ? limit 1;',
        register: 'INSERT INTO `user` VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
        login: 'SELECT  id, name, password, role, sign, logo, education, contact, web FROM `user` where id = ? limit 1;'
    },
    share: {
        get: 'SELECT id, title, summary, author, author_id, time, discuss FROM `share` order by id desc limit 0,8;',
        sum_share: 'SELECT count(*) FROM `share`;',
        more: 'SELECT id, title, summary, author, author_id, time, discuss FROM `share` order by id desc limit ',
    },
    feedback: {
        get: 'SELECT id, name, time, text FROM `feedback` order by id desc limit 10;',
        insert_comment: 'INSERT INTO `feedback` VALUES(0, ?, ?, ?);',
    },
    detail: {
        get_artical: 'SELECT * FROM `share` WHERE ID = ? limit 1;',
        get_comment: 'SELECT * FROM `share_comment` WHERE share_id = ? order by id desc;',
        insert_comment: 'INSERT INTO `share_comment` VALUES(0, ?, ?, ?, ?, ?);',
        delete_comment: 'DELETE FROM `share_comment` WHERE id = ? limit 1;',
        delete_article: 'DELETE FROM `share` WHERE id = ? limit 1;'
    },
    publish: {
        article: 'INSERT INTO `share` VALUES (0, ?, ?, ?, ?, 0, ?, ?);',
    }
}

module.exports = sql_map