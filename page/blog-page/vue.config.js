console.log('config');
module.exports = {
    devServer: {
        proxy: 'http://localhost:5000'
    }
}

// module.exports = {
//     devServer: {
//         proxy: {
//             //设置代理
//             '/queryAllBlogs': {
//                 target: 'http://localhost:5000',
//                 ws: true,
//                 changeOrigin: true,
//             }
//         }
//     }
// }