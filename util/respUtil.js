// 规范返回格式
function writeResult(status,msg,data){
    return JSON.stringify({status,msg,data});
}

module.exports = {
    writeResult
};