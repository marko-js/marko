// size: 367 (min) 182 (brotli)
const _c$if_content = _$.registerDynamicClosure(
    "b0",
    4,
    (_scope, c) => _$.data(_scope[2], c),
    (_scope) => _scope._._,
  ),
  _c$customTag_content = _$.registerDynamicClosure("b2", 4, (_scope, c) =>
    _$.data(_scope[2], c),
  ),
  _b$customTag_content = _$.dynamicClosure(3, (_scope, b) =>
    _$.data(_scope[1], b),
  );
_$.registerContent("b1", "<!> <!> <!>", "%c%c%", (_scope) => {
  _$.data(_scope[0], 1),
    _b$customTag_content._(_scope),
    _c$customTag_content._(_scope);
});
const _c = _$.state(4, (_scope, c) => {
  _c$customTag_content(_scope), _c$if_content(_scope);
});
_$.effect("b3", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _c(_scope, 4);
  }),
),
  init();
