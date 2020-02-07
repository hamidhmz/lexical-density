const config = require("config");

module.exports = function(){
    if(!config.get("PORT")){
        throw new Error(" FATAL ERROR: PORT is not defined");
    }
    if(!config.get("db")){
        throw new Error(" FATAL ERROR: db is not defined");
    }
};