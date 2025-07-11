// size: 568 (min) 328 (brotli)
const $expr_input_onCount_clickCount_effect = _$.effect(
    "a0",
    ($scope, { 4: input_onCount, 5: clickCount }) =>
      _$.on($scope[0], "click", function () {
        input_onCount($clickCount($scope, clickCount + 1));
      }),
  ),
  $expr_input_onCount_clickCount = _$.intersection(
    6,
    $expr_input_onCount_clickCount_effect,
  ),
  $clickCount = _$.state(5, ($scope, clickCount) => {
    (_$.data(
      $scope[1],
      ((() => {
        if (clickCount > 0)
          throw new Error(
            "This should not have executed since the parent removes this component when the count is greater than 0",
          );
      })(),
      clickCount),
    ),
      $expr_input_onCount_clickCount($scope));
  });
const $input_onCount = _$.value(4, $expr_input_onCount_clickCount),
  $setup$if$content = ($scope) => {
    (!(function ($scope) {
      $clickCount($scope, 0);
    })($scope[0]),
      $onCount$if$content._($scope));
  },
  $onCount$if$content = _$.conditionalClosure(2, 0, 0, ($scope, onCount) =>
    $input_onCount($scope[0], onCount),
  ),
  $if_content = _$.createRenderer(
    "<div><button> </button></div>",
    "D/ D l&",
    $setup$if$content,
  ),
  $if = _$.conditional(0, $if_content),
  $show = _$.state(1, ($scope, show) => $if($scope, show ? 0 : 1));
(_$.register("b0", function ($scope) {
  return function (count) {
    $show($scope, count < 1);
  };
}),
  init());
