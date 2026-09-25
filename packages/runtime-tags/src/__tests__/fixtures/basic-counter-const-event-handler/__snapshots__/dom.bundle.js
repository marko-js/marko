// template.marko
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $increment2 = /*@__PURE__*/ _const(3, _script("a0", ($scope) => _on($scope.a, "click", $scope.d ||= $increment($scope))));
const $increment = ($scope) => function() {
	$clickCount($scope, +$scope.c + 1);
};
