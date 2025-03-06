// size: 254 (min) 173 (brotli)
const _count$falseChild_content_effect = _$.effect(
    "b1",
    (_scope, { _: { 1: count } }) =>
      _$.on(_scope[0], "click", function () {
        _count(_scope._, count + 1);
      }),
  ),
  _count$falseChild_content = _$.registerDynamicClosure(
    "b2",
    1,
    (_scope, count) => {
      _$.data(_scope[1], count), _count$falseChild_content_effect(_scope);
    },
  );
_$.registerContent("b0", "<button> </button>", " D ", 0, 0, (_scope) =>
  _count$falseChild_content._(_scope),
);
const _count = _$.state(1, (_scope, count) =>
  _count$falseChild_content(_scope),
);
init();
