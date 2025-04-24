// size: 245 (min) 163 (brotli)
const $count$falseChild$content_effect = _$.effect(
    "b1",
    ($scope, { _: { 1: count } }) =>
      _$.on($scope[0], "click", function () {
        $count($scope._, count + 1);
      }),
  ),
  $count$falseChild$content = _$.dynamicClosureRead(1, ($scope, count) => {
    _$.data($scope[1], count), $count$falseChild$content_effect($scope);
  });
_$.registerContent(
  "b0",
  "<button> </button>",
  " D ",
  0,
  0,
  $count$falseChild$content,
);
const $count_closure = _$.dynamicClosure($count$falseChild$content),
  $count = _$.state(1, $count_closure);
init();
