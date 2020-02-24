var cache = {};

function get(key) {
    return cache[key];
}

function put(key, value) {
    cache[key] = value;
}

function clear() {
    cache = {};
}

exports.get = get;
exports.put = put;
exports.clear = clear;
