// size: 299 (min) 193 (brotli)
const _count$htmlScript_content = _$.registerDynamicClosure("a2", 1);
_$.registerContent("a1", 0, 0, 0, 0, (_scope) =>
  _count$htmlScript_content._(_scope),
);
const _count_effect = _$.effect("a3", (_scope, { 1: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(1, (_scope, count) => {
    _$.textContent(
      _scope[0],
      `\n  {\n    "imports": {\n      "${count}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _count$htmlScript_content(_scope),
      _count_effect(_scope);
  });
init();
