// 得到一个时间戳
function getTime(){
    console.log(Math.floor(new Date().getTime()/1000))
    return Math.floor(new Date().getTime()/1000);
}
getTime();

module.exports={
    getTime
}