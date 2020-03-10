const nv = require("./nvredis")
//const value = require("./nvredis/string")

 async function run(){
      //await nv.select(0)
      //await value.set("age","25")
      //await value.set("name","zs")
      //await nv.expire("age",2,"M")
      let keyArr = await nv.keys("*")
      console.info(keyArr)
      nv.shutdown()
 }
 run()