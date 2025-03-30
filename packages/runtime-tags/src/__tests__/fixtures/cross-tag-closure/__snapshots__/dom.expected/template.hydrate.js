// size: 337 (min) 195 (brotli)
const _value = _$.state(3, (_scope, value) => _$.tagVarSignal(_scope, value));
_$.register("a0", function (_scope) {
  return (_new_value) => {
    _value(_scope, _new_value);
  };
});
const _count$myTag_content_effect = _$.effect(
    "c1",
    (_scope, { _: { 3: count } }) =>
      _$.on(_scope[0], "click", function () {
        _$.tagVarSignalChange(_scope._[0], count + 1);
      }),
  ),
  _count$myTag_content = _$.dynamicClosureRead(3, (_scope, count) => {
    _$.data(_scope[1], count), _count$myTag_content_effect(_scope);
  }),
  _count_closure = _$.dynamicClosure(_count$myTag_content);
_$.registerBoundSignal(
  "c2",
  _$.value(3, (_scope) => _count_closure(_scope)),
),
  init();
