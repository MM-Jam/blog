const blogDao = require('../dao/blogDao');
const respUtil = require('../util/respUtil');
let path = new Map();

function queryAllBlogs(request,response){
    blogDao.queryAllBlogs(res=>{
        console.log('res',res)
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功',res));
        response.end();
    })
}
path.set('/queryAllBlogs',queryAllBlogs);

function queryBlogById(request,response){
    blogDao.queryBlogById(request.query.id,res=>{
        console.log('res',res)
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功',res));
        response.end();
    })
}
path.set('/queryBlogById',queryBlogById);
module.exports = {
    path,
};