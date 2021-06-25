const express = require('express');
const loader = require('./loader');
const cors = require('cors');

const app = new express();
app.use(express.static('./page/blog-page'));
app.use(cors())

app.get('/queryAllBlogs',loader.get('/queryAllBlogs'));
app.get('/queryBlogById',loader.get('/queryBlogById'))

app.listen(5000,function(){
    console.log('服务启动');
})