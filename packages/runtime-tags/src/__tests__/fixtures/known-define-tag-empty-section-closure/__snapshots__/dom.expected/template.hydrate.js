// size: 348 (min) 227 (brotli)
const $template = ((_w0) => `<!>${_w0}<!>`)(`<!><!><!>`),
  $walks = ((_w0) => `b/${_w0}&b`)(`b%c`),
  $if_content__setup$1 = _._closure_get(
    1,
    ($scope) => _._text($scope.a, $scope._._.b),
    ($scope) => $scope._._,
  ),
  $Tag_content__if = _._if(0, `<div> </div>`, `D l`, $if_content__setup$1),
  $Tag_content__input_x = ($scope, input_x) =>
    $Tag_content__if($scope, +!input_x),
  $count = _._const(1);
function $setup($scope) {
  (($scope.a._ = $scope),
    $Tag_content__input_x($scope.a, 1),
    $count($scope, 123));
}
const $if = _._if(
    0,
    ((_w0) => `<!>${_w0}<!>`)($template),
    ((_w0) => `b/${_w0}&b`)($walks),
    ($scope) => {
      $setup($scope.a);
    },
  ),
  $m = _._let(1, ($scope) => $if($scope, +!$scope.b));
(_._script(`b0`, ($scope) => $m($scope, 1)), init());
