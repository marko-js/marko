// size: 381 (min) 174 (brotli)
(_._resume("a0", function ($scope) {
  return () => (html) => ($scope.a.innerHTML = html);
}),
  _._script("b0", ($scope) => $scope.c),
  _._script("c0", ($scope) => $setHtml3_getter($scope._)()("Hello world")));
const $setHtml3_getter = _._hoist(2, "Ad");
_._var_resume("c1", _._const(2));
const $setHtml2_getter = _._hoist(2, "Ac");
_._var_resume("c2", _._const(2));
const $setHtml_getter = _._hoist_resume("c3", 2, "Aa", "Aa");
(_._var_resume("c4", _._const(2)),
  _._script("c5", ($scope) => {
    ($setHtml_getter($scope)()("Hello world"),
      $setHtml2_getter($scope)()("Hello world"));
  }),
  init());
