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

export { get, put, clear };
