// template.marko
const $baz2 = /*@__PURE__*/ _const(2, _script("a1", ($scope) => $scope.a.textContent = $scope.c.bar()));
const $baz = ($scope) => () => $scope.b?.bar;
_resume("a0", $baz);
