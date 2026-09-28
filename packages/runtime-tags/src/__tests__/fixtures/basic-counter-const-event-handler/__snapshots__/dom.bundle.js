// template.marko
const $increment2__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.d));
const $increment2 = /*@__PURE__*/ _const(3, $increment2__script);
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$increment2($scope, $increment($scope));
});
const $increment = ($scope) => function() {
	$clickCount($scope, +$scope.c + 1);
};
_resumed.a0 = $increment;
