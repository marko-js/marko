module.exports = function repeatable(a, b) {
  if (a) {
    if (Array.isArray(a)) {
      a.push(b);
      return a;
    }

    return [a, b];
  }

  return b;
};
