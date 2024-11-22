// size: 441 (min) 217 (brotli)
_$.dynamicTagAttrs(0);
_$.registerSubscriber(
  "c",
  _$.dynamicClosure(
    4,
    (_scope, c) => _$.data(_scope[2], c),
    (_scope) => _scope._._,
  ),
);
const _c$customTagBody = _$.registerSubscriber(
    "d",
    _$.dynamicClosure(4, (_scope, c) => _$.data(_scope[2], c)),
  ),
  _b$customTagBody = _$.dynamicClosure(3, (_scope, b) => _$.data(_scope[1], b)),
  _setup$customTagBody = (_scope) => {
    _$.data(_scope[0], 1);
  };
_$.register(
  "e",
  _$.createRendererWithOwner(
    "<!> <!> <!>",
    "%c%c%",
    _setup$customTagBody,
    () => [_c$customTagBody, _b$customTagBody],
  ),
);
const _c = _$.state(4, 0, () => _$.dynamicSubscribers(4));
_$.effect("f", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _c(_scope, 4);
  }),
),
  init();
