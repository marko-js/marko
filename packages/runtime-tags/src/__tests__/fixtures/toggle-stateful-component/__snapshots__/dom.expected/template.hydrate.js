// size: 541 (min) 339 (brotli)
const $input_onCount__OR__clickCount__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $scope[4]($clickCount($scope, $scope[5] + 1));
    }),
  ),
  $input_onCount__OR__clickCount = _._or(
    6,
    $input_onCount__OR__clickCount__script,
  ),
  $clickCount = _._let(5, ($scope) => {
    (_._text(
      $scope[1],
      ((() => {
        if ($scope[5] > 0)
          throw new Error(
            "This should not have executed since the parent removes this component when the count is greater than 0",
          );
      })(),
      $scope[5]),
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
  $if_content__onCount = _._if_closure(0, 0, ($scope) =>
    $input_onCount($scope[0], $scope._[2]),
  ),
  $if_content = _._content_branch(
    "<div><button> </button></div>",
    "D/ D l&l",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $show = _._let(1, ($scope) => $if($scope, $scope[1] ? 0 : 1));
(_._resume("b0", function ($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}),
  init());
