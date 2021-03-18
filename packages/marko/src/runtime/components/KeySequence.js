function KeySequence() {
  this.___lookup = Object.create(null);
}

KeySequence.prototype.___nextKey = function (key) {
  var lookup = this.___lookup;

  if (lookup[key]) {
    return key + "_" + lookup[key]++;
  }

  lookup[key] = 1;
  return key;
};

module.exports = KeySequence;
