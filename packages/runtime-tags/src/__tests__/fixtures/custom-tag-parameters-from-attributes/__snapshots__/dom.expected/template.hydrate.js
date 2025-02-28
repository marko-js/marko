// size: 458 (min) 265 (brotli)
const _expr_input_content_input_name_x = _$.intersection(8, (_scope) => {
    const { 5: input_content, 6: input_name, 7: x } = _scope;
    _dynamicTag(_scope, input_content, () => ({ count: x, name: input_name }));
  }),
  _dynamicTag = _$.dynamicTag(2),
  _x_effect = _$.effect("a0", (_scope, { 7: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(7, (_scope, x) => {
    _$.data(_scope[1], x),
      _expr_input_content_input_name_x(_scope),
      _x_effect(_scope);
  }),
  _name$customTag_content = _$.value(5, (_scope, name) =>
    _$.data(_scope[0], name),
  ),
  _count$customTag_content = _$.value(4, (_scope, count) =>
    _$.data(_scope[1], count),
  ),
  _pattern_$customTag_content = _$.value(3, (_scope, _pattern_) => {
    _count$customTag_content(_scope, _pattern_.count),
      _name$customTag_content(_scope, _pattern_.name);
  }),
  _params_2$customTag_content = _$.value(2, (_scope, _params_2) =>
    _pattern_$customTag_content(_scope, _params_2?.[0]),
  );
_$.registerContent(
  "b0",
  "<div>Count (<!>): <!></div>",
  "Db%c%",
  0,
  () => _params_2$customTag_content,
),
  init();
