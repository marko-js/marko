// size: 233 (min) 143 (brotli)
const _c$if_content = _$.registerDynamicClosure(
    "b0",
    4,
    (_scope, c) => _$.data(_scope[2], c),
    (_scope) => _scope._._,
  ),
  _c$customTag_content = _$.registerDynamicClosure("b2", 4, (_scope, c) =>
    _$.data(_scope[2], c),
  ),
  _c = _$.state(4, (_scope, c) => {
    _c$customTag_content(_scope), _c$if_content(_scope);
  });
_$.effect("b3", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _c(_scope, 4);
  }),
),
  init();
