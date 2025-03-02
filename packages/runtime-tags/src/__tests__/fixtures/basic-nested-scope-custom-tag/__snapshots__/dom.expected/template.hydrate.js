// size: 181 (min) 139 (brotli)
const _count$child_content_effect = _$.effect(
    "b1",
    (_scope, { _: { 1: count } }) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._, count + 1);
      }),
  ),
  _count$child_content = _$.registerDynamicClosure("b2", 1, (_scope, count) => {
    _$.data(_scope[1], count), _count$child_content_effect(_scope);
  }),
  _count = _$.state(1, (_scope, count) => _count$child_content(_scope));
init();
