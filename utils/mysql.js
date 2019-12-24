const mysql = require('mysql')

// 数据库链接配置
const config = {
    host: '39.107.234.105',
    user: 'root',
    password: 'binguo',
    database: 'bigboss',
    port: '3306',
}

// 创建连接池
let pool = mysql.createPool(config)

// 使用连接池
let con_pool = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(`数据库连接失败 ${err}`);
                reject(err)
            } else {
                console.log(`数据库连接成功`);
                connection.query(sql, values, function (error, results, fields) {
                    console.log(sql);
                    if (error) {
                        console.log(`SQL语句执行失败`);
                        reject(error)
                    } else {
                        console.log(`SQL语句执行成功`);
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = con_pool