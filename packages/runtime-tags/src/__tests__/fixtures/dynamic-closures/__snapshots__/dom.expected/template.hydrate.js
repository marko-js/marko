// size: 456 (min) 221 (brotli)
_$.dynamicTagAttrs(0);
const _c$if_content = _$.registerSubscriber(
    "b0",
    _$.dynamicClosure(
      4,
      (_scope, c) => _$.data(_scope[2], c),
      (_scope) => _scope._._,
    ),
  ),
  _c$customTag_content = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(4, (_scope, c) => _$.data(_scope[2], c)),
  ),
  _b$customTag_content = _$.dynamicClosure(3, (_scope, b) =>
    _$.data(_scope[1], b),
  ),
  _setup$customTag_content = (_scope) => {
    _$.data(_scope[0], 1),
      _b$customTag_content._(_scope, _scope._[3]),
      _c$customTag_content._(_scope, _scope._[4]);
  };
_$.register(
  "b2",
  _$.createRendererWithOwner("<!> <!> <!>", "%c%c%", _setup$customTag_content),
);
const _c = _$.state(4, (_scope, c) => {
  _c$customTag_content(_scope, c), _c$if_content(_scope, c);
});
_$.effect("b3", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _c(_scope, 4);
  }),
),
  init();
