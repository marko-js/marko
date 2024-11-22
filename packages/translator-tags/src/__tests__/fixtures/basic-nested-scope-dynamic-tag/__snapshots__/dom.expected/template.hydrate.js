// size: 370 (min) 221 (brotli)
_$.dynamicTagAttrs(0);
const _count$falseChildBody_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const {
          _: { 1: count },
        } = _scope;
        return function () {
          _count(_scope._, count + 1);
        };
      })(_scope),
    ),
  ),
  _count$falseChildBody = _$.registerSubscriber(
    "c",
    _$.dynamicClosure(1, (_scope, count) => {
      _$.data(_scope[1], count), _count$falseChildBody_effect(_scope);
    }),
  ),
  _falseChildBody = _$.register(
    "d",
    _$.createRendererWithOwner("<button> </button>", " D ", void 0, () => [
      _count$falseChildBody,
    ]),
  );
_$.dynamicTagAttrs(0, _falseChildBody);
const _count = _$.state(1, 0, () => _$.dynamicSubscribers(1));
init();
