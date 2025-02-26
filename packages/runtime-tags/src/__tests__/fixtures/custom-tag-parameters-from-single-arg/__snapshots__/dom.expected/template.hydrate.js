// size: 352 (min) 234 (brotli)
const _expr_input_content_x = _$.intersection(
    2,
    (_scope) => {
      const { 5: input_content, 6: x } = _scope;
      _dynamicTag(_scope, input_content, () => x);
    },
    () => _dynamicTag,
  ),
  _dynamicTag = _$.dynamicTag(2),
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
    () => _expr_input_content_x,
  ),
  _count$customTag_content = _$.value(2, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _params_2$customTag_content = _$.value(1, (_scope, _params_2) =>
    _count$customTag_content(_scope, _params_2[0]),
  );
_$.registerContent(
  "b0",
  "<div>Count: <!></div>",
  "Db%",
  0,
  () => _params_2$customTag_content,
),
  init();
