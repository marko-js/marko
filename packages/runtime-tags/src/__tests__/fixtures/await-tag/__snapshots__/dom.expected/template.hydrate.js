// size: 288 (min) 139 (brotli)
const _count$await_content3 = _$.dynamicClosureRead(4, (_scope, count) =>
    _$.data(_scope[1], count),
  ),
  _count$await_content2 = _$.dynamicClosureRead(4, (_scope, count) =>
    _$.data(_scope[1], count),
  ),
  _count$await_content = _$.dynamicClosureRead(4, (_scope, count) =>
    _$.data(_scope[1], count),
  ),
  _count_closure = _$.dynamicClosure(
    _count$await_content,
    _count$await_content2,
    _count$await_content3,
  ),
  _count_effect = _$.effect("a0", (_scope, { 4: count }) =>
    _$.on(_scope[3], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(4, (_scope) => {
    _count_closure(_scope), _count_effect(_scope);
  });
init();
