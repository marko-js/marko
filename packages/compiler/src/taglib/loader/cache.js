var cache = {};

function get(key) {
  return cache[key];
}

function put(key, value) {
  cache[key] = value;
}

function remove(key) {
  delete cache[key];
}

function clear() {
  cache = {};
}

export { get, put, remove, clear };
