// template.marko
const $count = /*@__PURE__*/ _let(3, ($scope) => $_shownSource($scope, $scope.d));
const $shown = /*@__PURE__*/ _draft(4, 3, ($scope) => _text($scope.b, $scope.e));
const $_shownSource = ($scope) => {
	$shown($scope, $scope.d);
};
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$shown($scope, 5, 1);
	});
	_on($scope.c, "click", function() {
		$count($scope, 3);
	});
});
