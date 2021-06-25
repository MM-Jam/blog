const fs = require("fs");
let globalConfig = require('./config.js');
let controllerSet = [];
let pathMap = new Map();

let files = fs.readdirSync(globalConfig['web_path']);
//console.log(files);//[ 'testController.js' ]
for(let i=0;i<files.length;i++){
    let temp = require('./'+globalConfig['web_path']+'/'+files[i]); //{path:Map}
    if(temp.path){
        for (const [key,value] of temp.path) {
            if(pathMap.get(key)==null){
                pathMap.set(key,value)
            }else{
                throw Error();
            }
        }
        controllerSet.push(temp);
    }
}
console.log(pathMap)

module.exports = pathMap;