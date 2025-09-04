// size: 547 (min) 322 (brotli)
const $input_onCount__OR__clickCount__script = _._script(
    "a0",
    ($scope, { 4: input_onCount, 5: clickCount }) =>
      _._on($scope[0], "click", function () {
        input_onCount($clickCount($scope, ++clickCount));
      }),
  ),
  $input_onCount__OR__clickCount = _._or(
    6,
    $input_onCount__OR__clickCount__script,
  ),
  $clickCount = _._let(5, ($scope, clickCount) => {
    (_._text(
      $scope[1],
      ((() => {
        if (clickCount > 0)
          throw new Error(
            "This should not have executed since the parent removes this component when the count is greater than 0",
          );
      })(),
      clickCount),
    ),
      $input_onCount__OR__clickCount($scope));
  });
const $input_onCount = _._const(4, $input_onCount__OR__clickCount),
  $if_content__setup = ($scope) => {
    (!(function ($scope) {
      $clickCount($scope, 0);
    })($scope[0]),
      $if_content__onCount._($scope));
  },
  $if_content__onCount = _._if_closure(2, 0, 0, ($scope, onCount) =>
    $input_onCount($scope[0], onCount),
  ),
  $if_content = _._content_branch(
    "<div><button> </button></div>",
    "D/ D l&l",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $show = _._let(1, ($scope, show) => $if($scope, show ? 0 : 1));
(_._resume("b0", function ($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}),
  init());
