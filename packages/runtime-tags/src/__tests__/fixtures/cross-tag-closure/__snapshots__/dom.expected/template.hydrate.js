// size: 393 (min) 228 (brotli)
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
  _count$myTag_content = _$.registerDynamicClosure("c2", 3, (_scope, count) => {
    _$.data(_scope[1], count), _count$myTag_content_effect(_scope);
  });
_$.registerContent("c0", "<button> </button>", " D ", (_scope) => {
  _count$myTag_content._(_scope);
}),
  _$.registerBoundSignal(
    "c3",
    _$.value(3, (_scope, count) => _count$myTag_content(_scope)),
  ),
  init();
