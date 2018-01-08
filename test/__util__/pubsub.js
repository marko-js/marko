var EventEmitter = require('events').EventEmitter;

var channels = {};

module.exports = exports = new EventEmitter();

exports.channel = function (name) {
    return channels[name] || (channels[name] = new EventEmitter());
};