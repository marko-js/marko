// tags/tagged/index.marko
const $count = /*@__PURE__*/ _fill_let("b0", 8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function(event) {
	$count($scope, +$scope.i + 1);
	const shared = window.shared;
	if (shared) event.target.dataset.same = String($scope.g === shared);
	else window.shared = $scope.g;
}));
