// template.marko
const $count__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.g + 2);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.g * 3);
	});
	_on($scope.e, "click", function() {
		$count($scope, $scope.g ** 3);
	});
});
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	_text($scope.d, $scope.g);
	_text($scope.f, $scope.g);
	$count__script($scope);
});
