// template.marko
const $Child_content__x = /*@__PURE__*/ _let(1, ($scope) => _return($scope, $scope.b ? "on" : "off"));
const $Child_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Child_content__x($scope, !$scope.b);
}));
const $v__OR__w = /*@__PURE__*/ _or(7, ($scope) => _text($scope.e, $scope.f + $scope.g), 1, 3);
const $v = _var_resume("a2", /*@__PURE__*/ _const(5, $v__OR__w));
const $w = _var_resume("a3", /*@__PURE__*/ _const(6, $v__OR__w));
