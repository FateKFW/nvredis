const redis = require("redis")
const conf = require("../config")
const client = redis.createClient(
        conf.PORT || 6379,
        conf.HOST || '127.0.0.1', 
        conf.OPTS)

// client.on('connect',function(){
//     console.log('连接成功');
// });

client.on('end',function(err){
    console.log('end');
});

// client.on('ready',function(res){
//     console.log('ready');
// });

client.on('error', function (err) {
    console.log(err);
});

const nv = {
    client : client,
    shutdown(flush){
        client.end(flush)
    },
    select(db){
        return new Promise((resolve, reject)=>{
            client.select(db,(err)=>{
                if(err){
                    reject(err)
                } else {
                    resolve(db)
                }
            })
        })
    },
    keys(pattern){
        return new Promise((resolve, reject)=>{
            client.keys(pattern,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    },
    expire(key,time,unit){
        let resTime = 0
        switch(unit){
            case 'D':
                resTime = time * 24 * 60 *60
                break;
            case 'H':
                resTime = time * 60 *60
                break;
            case 'M':
                resTime = time *60
                break;
            default:
                resTime = time
                break;
        }

        return new Promise((resolve, reject)=>{
            client.expire(key,resTime,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    },
    ttl(key){
        return new Promise((resolve, reject)=>{
            client.ttl(key,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    }
}

module.exports = nv