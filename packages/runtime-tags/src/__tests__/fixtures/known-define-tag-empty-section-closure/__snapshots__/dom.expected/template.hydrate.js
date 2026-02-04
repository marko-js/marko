// size: 286 (min) 197 (brotli)
const $if_content__setup$1 = _._closure_get(
    1,
    ($scope) => _._text($scope.a, $scope._._.b),
    ($scope) => $scope._._,
  ),
  $Tag_content__if = _._if(0, "<div> </div>", "D l", $if_content__setup$1),
  $count = _._const(1);
function $setup($scope) {
  (($scope.a._ = $scope),
    (($scope) => {
      $Tag_content__if($scope, 0);
    })($scope.a),
    $count($scope, 123));
}
const $if_content__setup = ($scope) => {
    $setup($scope.a);
  },
  $if = _._if(0, "<!><!><!><!><!><!><!>", "b/b/b%c&b&b", $if_content__setup),
  $m = _._let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
(_._script("b0", ($scope) => $m($scope, 1)), init());
