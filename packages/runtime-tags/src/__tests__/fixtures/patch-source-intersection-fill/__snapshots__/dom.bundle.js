// template.marko
const $qty__OR__price = /*@__PURE__*/ _fill_join("a0", 8, /*@__PURE__*/ _or(9, ($scope) => _text($scope.b, $scope.i * $scope.h)));
const $qty = /*@__PURE__*/ _let(7, $qty__OR__price);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$qty($scope, +$scope.h + 1);
}));
