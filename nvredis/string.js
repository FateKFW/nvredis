const nv = require("./index")

const value = {
    set : function(key,value){
        return new Promise((resolve, reject)=>{
            nv.client.set(key,value,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    } ,
    get : function(key){
        return new Promise((resolve, reject)=>{
            nv.client.get(key,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    }
}

module.exports = value