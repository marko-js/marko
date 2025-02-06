// size: 295 (min) 198 (brotli)
const _count$child_content_effect = _$.effect(
    "b0",
    (_scope, { _: { 1: count } }) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._, count + 1);
      }),
  ),
  _count$child_content = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure((_scope, count) => {
      _$.data(_scope[1], count), _count$child_content_effect(_scope);
    }),
  ),
  _setup$child_content = (_scope) => {
    _count$child_content._(_scope, _scope._[1]);
  };
_$.register(
  "b2",
  _$.createRendererWithOwner("<button> </button>", " D ", _setup$child_content),
);
const _count = _$.state(1, (_scope, count) =>
  _count$child_content(_scope, count),
);
init();
