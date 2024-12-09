// size: 271 (min) 167 (brotli)
const createWrapper = _createWrapper,
  _a = _$.value(5, (_scope, a) => {
    _$.data(_scope[1], a),
      ((_scope, b) => {
        _$.data(_scope[2], b);
      })(_scope, a);
  }),
  _pattern_ = _$.value(4, (_scope, _pattern_) => _a(_scope, _pattern_.a)),
  _count_effect = _$.effect("a1", (_scope, { 3: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(3, (_scope, count) => {
    _count_effect(_scope), _pattern_(_scope, createWrapper(count));
  });
function _createWrapper(a) {
  return { a: a };
}
_$.register("a0", _createWrapper), init();
