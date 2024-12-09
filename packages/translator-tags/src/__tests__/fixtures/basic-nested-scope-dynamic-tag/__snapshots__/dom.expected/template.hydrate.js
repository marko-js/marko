// size: 353 (min) 218 (brotli)
_$.dynamicTagAttrs(0);
const _count$falseChildBody_effect = _$.effect(
    "b0",
    (_scope, { _: { 1: count } }) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._, count + 1);
      }),
  ),
  _count$falseChildBody = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(1, (_scope, count) => {
      _$.data(_scope[1], count), _count$falseChildBody_effect(_scope);
    }),
  ),
  _falseChildBody = _$.register(
    "b2",
    _$.createRendererWithOwner("<button> </button>", " D ", void 0, () => [
      _count$falseChildBody,
    ]),
  );
_$.dynamicTagAttrs(0, _falseChildBody);
const _count = _$.state(1, 0, () => _$.dynamicSubscribers(1));
init();
