// size: 363 (min) 219 (brotli)
const _count$htmlScript_content = _$.registerSubscriber(
  "a1",
  _$.dynamicClosure(1, 0),
);
_$.register(
  "a2",
  _$.createRendererWithOwner("", "", void 0, () => [_count$htmlScript_content]),
);
const _count_effect = _$.effect("a3", (_scope, { 1: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(
    1,
    (_scope, count) => {
      _$.textContent(
        _scope[0],
        `\n  {\n    "imports": {\n      "${count}": "https://markojs.com",\n    }\n  }\n`,
      ),
        _count_effect(_scope);
    },
    () => _$.dynamicSubscribers(1),
  );
init();
