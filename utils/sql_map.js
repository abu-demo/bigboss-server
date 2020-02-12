let sql_map = {
    user: {
        personal: 'SELECT  id, name, role, sign, logo, publish FROM `user` where id = ? limit 1;',
        register: 'INSERT INTO `user` VALUES(0, ?, ?, ?, ?, ?, ?, ?);',
        login: 'SELECT  id, name, password, role, sign, logo, publish FROM `user` where id = ? limit 1;'
    },
    share: {
        sum_share: 'SELECT count(*) FROM `share`;',
        more: 'SELECT id, title, summary, author, author_id, time, discuss FROM `share` order by id desc limit ',
    },
    feedback: {
        insert_comment: 'INSERT INTO `feedback` VALUES(0, ?, ?, ?, ?);',
        more: 'SELECT * FROM `feedback` order by id desc limit ',
        del: 'DELETE FROM `feedback` WHERE id = ? limit 1;',
    },
    detail: {
        get_artical: 'SELECT * FROM `share` WHERE ID = ? limit 1;',
        get_comment: 'SELECT * FROM `share_comment` WHERE share_id = ? order by id desc limit ',
        insert_comment: 'INSERT INTO `share_comment` VALUES(0, ?, ?, ?, ?, ?);',
        delete_comment: 'DELETE FROM `share_comment` WHERE id = ? limit 1;',
        delete_article: 'DELETE FROM `share` WHERE id = ? limit 1;',
        get_active: 'SELECT * FROM `active` WHERE id = ? limit 1;'
    },
    publish: {
        article: 'INSERT INTO `share` VALUES (0, ?, ?, ?, ?, 0, ?, ?);',
        active: 'INSERT INTO `active` VALUES (0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
    },
    active: {
        more: 'SELECT id, title, date, time, address, poster FROM `active` order by id desc limit ',
    }
}

module.exports = sql_map