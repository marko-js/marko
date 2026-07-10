// template.marko
const $disabled = /*@__PURE__*/ _let(3, ($scope) => {
	_attr($scope.a, "disabled", $scope.d);
	_text($scope.c, $scope.d ? "enable" : "disable");
});
const $setup__script = _script("a0", ($scope) => {
	$scope.d ??= true;
	_on($scope.b, "click", function() {
		$disabled($scope, !$scope.d);
	});
});
