const express = require('express');

const app = new express();
app.use(express.static('./page/blog-page'));
app.listen(8081,function(){
    console.log('服务启动');
})