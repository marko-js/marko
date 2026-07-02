// template.marko
const $x = /* @__PURE__ */ _let(3, ($scope) => _text($scope.b, $scope.d));
const $y = /* @__PURE__ */ _let_change(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", () => $x($scope, $y($scope, $scope.d + $scope.e))));
