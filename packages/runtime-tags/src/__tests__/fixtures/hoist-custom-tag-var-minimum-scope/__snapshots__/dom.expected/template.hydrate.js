// size: 397 (min) 180 (brotli)
_._resume("a0", function ($scope) {
  return () => $scope.c;
});
const $ref_getter = _._hoist_resume("b0", 3, "Aa", "Ad"),
  $for_content__ref_getter = _._hoist_resume("b1", 3, "Aa"),
  $for_content2__ref_getter = _._hoist_resume("b2", 3);
(_._script(
  "b3",
  ($scope) =>
    ($scope._._.c.innerHTML += `${[...$for_content2__ref_getter($scope)].length}; ${$for_content2__ref_getter($scope)()}\n\t`),
),
  _._var_resume("b4", _._const(3)),
  _._script(
    "b5",
    ($scope) =>
      ($scope._.b.innerHTML += `${[...$for_content__ref_getter($scope)].length}; ${$for_content__ref_getter($scope)()}\n\t`),
  ),
  _._script(
    "b6",
    ($scope) =>
      ($scope.a.innerHTML += `${[...$ref_getter($scope)].length}; ${$ref_getter($scope)()}\n\t`),
  ),
  init());
