// size: 285 (min) 169 (brotli)
function createWrapper(a) {
  return { a: a };
}
_$.register("b", createWrapper);
const _a = _$.value(5, (_scope, a) => {
    _$.data(_scope[1], a),
      ((_scope, b) => {
        _$.data(_scope[2], b);
      })(_scope, a);
  }),
  _pattern_ = _$.value(4, (_scope, _pattern_) => _a(_scope, _pattern_.a)),
  _count_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: count } = _scope;
        return function () {
          _count(_scope, count + 1);
        };
      })(_scope),
    ),
  ),
  _count = _$.state(3, (_scope, count) => {
    _count_effect(_scope), _pattern_(_scope, createWrapper(count));
  });
init();
