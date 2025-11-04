// size: 386 (min) 173 (brotli)
(_._resume("a0", function ($scope) {
  return function (html) {
    $scope.a.innerHTML = html;
  };
}),
  _._script("b0", ($scope) => $scope.c),
  _._script("c0", ($scope) => $get$hoisted_setHtml($scope._)("Hello world")));
const $get$hoisted_setHtml = _._hoist(2, "Dd");
_._var_resume("c1", _._const(2));
const $get$hoisted_setHtml2 = _._hoist(2, "Dc");
_._var_resume("c2", _._const(2));
const $get$hoisted_setHtml3 = _._resume("c3", _._hoist(2, "Da", "Da"));
(_._var_resume("c4", _._const(2)),
  _._script("c5", ($scope) => {
    ($get$hoisted_setHtml3($scope)("Hello world"),
      $get$hoisted_setHtml2($scope)("Hello world"));
  }),
  init());
