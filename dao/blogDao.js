const dbUtil = require('../util/DBUtil');
/**
 * 
 * @param {*} success 成功的回调函数
 */
function queryAllBlogs(success){
    const querySql = 'select * from blog order by ctime desc';
    const connection = dbUtil.createConnection();
    connection.query(querySql,(err,res)=>{
        if(!err){
            success(res);
        }else{
            console.log(err)
        }
    })
    connection.end();
}

/**
 * 
 * @param {*} success 成功的回调函数
 */
 function queryBlogById(id,success){
    const querySql = 'select * from blog where id = ? limit 0,1;';
    const params = [id];
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(querySql, params,function (err, res) {
        if (err){
            console.log(err)
        }
        else{
            success(res)
        }
    });
}

function queryBlogsByTag(tag,success){
    const querySql = 'select * from blog where tag = ?';
    const params = [tag];
    const connection = dbUtil.createConnection();
    connection.connect();
    connection.query(querySql, params,function (err, res) {
        if (err){
            console.log(err)
        }
        else{
            success(res)
        }
    });
}

module.exports = {
    queryAllBlogs,
    queryBlogById,
    queryBlogsByTag
}