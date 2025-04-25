// size: 245 (min) 161 (brotli)
const $count$falseChild$content_effect = _$.effect(
    "b1",
    ($scope, { _: { 1: count } }) =>
      _$.on($scope[0], "click", function () {
        $count($scope._, count + 1);
      }),
  ),
  $count$falseChild$content = _$.dynamicClosureRead(1, ($scope, count) => {
    _$.data($scope[1], count), $count$falseChild$content_effect($scope);
  }),
  $setup$falseChild$content = $count$falseChild$content;
_$.registerContent(
  "b0",
  "<button> </button>",
  " D ",
  $setup$falseChild$content,
);
const $count_closure = _$.dynamicClosure($count$falseChild$content),
  $count = _$.state(1, $count_closure);
init();
