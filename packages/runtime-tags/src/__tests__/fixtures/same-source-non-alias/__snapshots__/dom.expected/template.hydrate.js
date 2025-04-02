// size: 271 (min) 160 (brotli)
const createWrapper = _createWrapper,
  _a = _$.value(5, (_scope, a) => {
    _$.data(_scope[1], a),
      ((_scope, b) => {
        _$.data(_scope[2], b);
      })(_scope, a);
  }),
  _pattern2 = _$.value(4, (_scope, _pattern) => _a(_scope, _pattern.a)),
  _count_effect = _$.effect("a1", (_scope, { 3: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(3, (_scope, count) => {
    _pattern2(_scope, createWrapper(count)), _count_effect(_scope);
  });
function _createWrapper(a) {
  return { a: a };
}
_$.register("a0", _createWrapper), init();
