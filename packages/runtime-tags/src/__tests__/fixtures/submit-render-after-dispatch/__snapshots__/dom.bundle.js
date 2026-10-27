// template.marko
const $busy = /*@__PURE__*/ _let(4, ($scope) => _attr($scope.b, "disabled", $scope.e));
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "submit", function(ev) {
		ev.preventDefault();
		$busy($scope, true);
	});
	_on($scope.c, "click", function() {
		$count($scope, +$scope.f + 1);
	});
});
