// size: 232 (min) 147 (brotli)
const _c$if_content = _$.dynamicClosureRead(
    4,
    (_scope, c) => _$.data(_scope[2], c),
    (_scope) => _scope._._,
  ),
  _c$customTag_content = _$.dynamicClosureRead(4, (_scope, c) =>
    _$.data(_scope[2], c),
  ),
  _c_closure = _$.dynamicClosure(_c$customTag_content, _c$if_content),
  _c = _$.state(4, (_scope, c) => _c_closure(_scope));
_$.effect("b1", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _c(_scope, 4);
  }),
),
  init();
