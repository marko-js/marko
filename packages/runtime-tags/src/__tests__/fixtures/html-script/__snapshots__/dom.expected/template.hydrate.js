// size: 209 (min) 150 (brotli)
const _count_effect = _$.effect("a1", (_scope, { 2: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(2, (_scope, count) => {
    _$.textContent(
      _scope[0],
      `\n  {\n    "imports": {\n      "${count}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _count_effect(_scope);
  });
init();
