const blogDao = require('../dao/blogDao');
const respUtil = require('../util/respUtil');
let path = new Map();

function queryAllBlogs(request,response){
    blogDao.queryAllBlogs(res=>{
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功',res));
        response.end();
    })
}
path.set('/queryAllBlogs',queryAllBlogs);

function queryBlogById(request,response){
    blogDao.queryBlogById(request.query.id,res=>{
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功',res));
        response.end();
    })
}
path.set('/queryBlogById',queryBlogById);

function queryBlogsByTag(request,response){
    blogDao.queryBlogsByTag(request.query.tag,res=>{
        console.log('res',res)
        response.writeHead(200);
        response.write(respUtil.writeResult('success','查询成功',res));
        response.end();
    })
}
path.set('/queryBlogsByTag',queryBlogsByTag);

module.exports = {
    path,
};