// size: 315 (min) 179 (brotli)
_._script(`a0`, ($scope) => $scope.b.action());
function $_return($scope) {
  return () => ({
    setHtml(value) {
      $scope.a.innerHTML = value;
    },
    addClass(value) {
      $scope.a.classList.add(value);
    },
  });
}
_._resume(`b0`, $_return);
const $api_getter = _._hoist(3);
(_._script(`c1`, ($scope) => $api_getter($scope)().setHtml(`works`)),
  _._var_resume(`c2`, _._const(3)));
function $action($scope) {
  return function () {
    $api_getter($scope)().addClass(`child`);
  };
}
(_._resume(`c0`, $action), init());
