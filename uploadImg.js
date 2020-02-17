const fs = require('fs')
const path = require('path')

let logo = function (file) {
    // 创建可读流
    let reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, 'public/images/logo/') + `${file.name}`;
    console.log("头像保存地址————————————" + filePath);
    // 创建可写流
    let write = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(write);

    let path = `http://localhost:3000/images/logo/${file.name}`;
    return path;
}

module.exports = {
    logo,
}