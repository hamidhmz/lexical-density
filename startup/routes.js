const express = require("express");
const main = require("../routes/main");
const error = require("../middleware/error");
/**
 *
 *
 * @export
 * @param {*} app
 */
module.exports = function(app){
    app.use(express.json());
    app.use(main);
    app.use(error);
};