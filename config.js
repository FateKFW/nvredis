const conf = (function(){
    let HOST = "127.0.0.1"
    let PORT = "6379"
    //let OPTS = {auth_pass: ""}
    let OPTS = undefined
    
    return {
        HOST,
        PORT,
        OPTS
    }
})();

module.exports = conf