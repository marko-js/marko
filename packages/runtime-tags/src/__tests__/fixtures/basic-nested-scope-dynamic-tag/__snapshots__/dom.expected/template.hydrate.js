// size: 341 (min) 217 (brotli)
_$.dynamicTagAttrs(0);
const _count$falseChild_content_effect = _$.effect(
    "b0",
    (_scope, { _: { 1: count } }) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._, count + 1);
      }),
  ),
  _count$falseChild_content = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure((_scope, count) => {
      _$.data(_scope[1], count), _count$falseChild_content_effect(_scope);
    }),
  ),
  _setup$falseChild_content = (_scope) => {
    _count$falseChild_content._(_scope, _scope._[1]);
  },
  _falseChild_content = _$.register(
    "b2",
    _$.createRendererWithOwner(
      "<button> </button>",
      " D ",
      _setup$falseChild_content,
    ),
  );
_$.dynamicTagAttrs(0, _falseChild_content);
const _count = _$.state(1, (_scope, count) =>
  _count$falseChild_content(_scope, count),
);
init();
