// tags/demo-card.marko
const $input_progress = ($scope, input_progress) => _text($scope.b, input_progress);

// tags/page-b.marko
const $progress = /*@__PURE__*/ _fill_let("c1", 3, ($scope) => {
	_text($scope.b, $scope.d);
	$input_progress($scope.c, $scope.d);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$progress($scope, +$scope.d + 1);
}));
