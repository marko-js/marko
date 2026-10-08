// template.marko
const $if_content__double = _shell_if_closure("a4", 1, 0, ($scope) => _text($scope.a, $scope._.i));
const $double = /*@__PURE__*/ _const(8, $if_content__double);
const $count = /*@__PURE__*/ _fill_let("a2", 7, ($scope) => $double($scope, $scope.h * 2));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
