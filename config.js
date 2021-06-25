// 读取全局的配置文件
const fs = require("fs");
let globalConfig = {};
let conf = fs.readFileSync('./server.conf.js');
let confArr = conf.toString().split('\n');

for(let i=0;i<confArr.length;i++){
    globalConfig[confArr[i].split('=')[0].trim()] = confArr[i].split('=')[1].trim()
}

module.exports = globalConfig; //{ port: '8080', web_path: 'web' }