// size: 490 (min) 265 (brotli)
const _value = _$.state(
  3,
  (_scope, value) => _$.tagVarSignal(_scope, value),
  () => _$.tagVarSignal,
);
_$.register("a0", function (_scope) {
  return (_new_value) => {
    _value(_scope, _new_value);
  };
}),
  _$.dynamicTagAttrs(0);
const _count$myTag_content_effect = _$.effect(
    "c0",
    (_scope, { _: { 2: count } }) =>
      _$.on(_scope[0], "click", function () {
        _$.tagVarSignalChange(_scope._[0], count + 1);
      }),
  ),
  _count$myTag_content = _$.registerSubscriber(
    "c1",
    _$.dynamicClosure(2, (_scope, count) => {
      _$.data(_scope[1], count), _count$myTag_content_effect(_scope);
    }),
  );
_$.register(
  "c2",
  _$.createRendererWithOwner("<button> </button>", " D ", void 0, () => [
    _count$myTag_content,
  ]),
),
  _$.registerBoundSignal(
    "c3",
    _$.value(2, 0, () => _$.dynamicSubscribers(2)),
  ),
  init();
