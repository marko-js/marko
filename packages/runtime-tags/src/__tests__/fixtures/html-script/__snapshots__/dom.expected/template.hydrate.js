// size: 259 (min) 179 (brotli)
_$.register("a1", _$.createRendererWithOwner("", ""));
const _count_effect = _$.effect("a2", (_scope, { 1: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(1, (_scope, count) => {
    _$.textContent(
      _scope[0],
      `\n  {\n    "imports": {\n      "${count}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _count_effect(_scope);
  });
init();
