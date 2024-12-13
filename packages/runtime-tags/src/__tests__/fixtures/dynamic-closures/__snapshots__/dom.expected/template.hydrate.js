// size: 445 (min) 212 (brotli)
_$.dynamicTagAttrs(0);
_$.registerSubscriber(
  "b0",
  _$.dynamicClosure(
    4,
    (_scope, c) => _$.data(_scope[2], c),
    (_scope) => _scope._._,
  ),
);
const _c$customTagBody = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(4, (_scope, c) => _$.data(_scope[2], c)),
  ),
  _b$customTagBody = _$.dynamicClosure(3, (_scope, b) => _$.data(_scope[1], b)),
  _setup$customTagBody = (_scope) => {
    _$.data(_scope[0], 1);
  };
_$.register(
  "b2",
  _$.createRendererWithOwner(
    "<!> <!> <!>",
    "%c%c%",
    _setup$customTagBody,
    () => [_c$customTagBody, _b$customTagBody],
  ),
);
const _c = _$.state(4, 0, () => _$.dynamicSubscribers(4));
_$.effect("b3", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _c(_scope, 4);
  }),
),
  init();
