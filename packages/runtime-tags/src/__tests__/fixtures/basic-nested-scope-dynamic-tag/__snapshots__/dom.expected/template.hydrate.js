// size: 274 (min) 188 (brotli)
const _count$falseChild_content_effect = _$.effect(
    "b0",
    (_scope, { _: { 1: count } }) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._, count + 1);
      }),
  ),
  _count$falseChild_content = _$.registerDynamicClosure(
    "b1",
    1,
    (_scope, count) => {
      _$.data(_scope[1], count), _count$falseChild_content_effect(_scope);
    },
  ),
  _setup$falseChild_content = (_scope) => {
    _count$falseChild_content._(_scope);
  };
_$.register(
  "b2",
  _$.createRendererWithOwner(
    "<button> </button>",
    " D ",
    _setup$falseChild_content,
  ),
);
const _count = _$.state(1, (_scope, count) =>
  _count$falseChild_content(_scope),
);
init();
