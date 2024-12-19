// size: 383 (min) 247 (brotli)
const _inputContent_input = _$.dynamicTagAttrs(2),
  _expr_Text_x = _$.intersection(
    2,
    (_scope) => {
      const { 6: x } = _scope;
      _inputContent_input(_scope, () => x);
    },
    () => _inputContent_input,
  ),
  _x_effect = _$.effect("a0", (_scope, { 6: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(
    6,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope);
    },
    () => _expr_Text_x,
  ),
  _count$customTag_content = _$.value(2, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _params_2$customTag_content = _$.value(1, (_scope, _params_2) =>
    _count$customTag_content(_scope, _params_2[0]),
  );
_$.register(
  "b0",
  _$.createRendererWithOwner(
    "<div>Count: <!></div>",
    "Db%",
    void 0,
    void 0,
    () => _params_2$customTag_content,
  ),
),
  init();
