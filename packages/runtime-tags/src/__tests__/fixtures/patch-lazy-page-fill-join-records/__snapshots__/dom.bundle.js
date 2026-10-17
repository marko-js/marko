// page-a.marko
const $n = /*@__PURE__*/ _fill_let("b2", 8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("b1", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));

// page-b.marko
const $card_content__count = /*@__PURE__*/ _shell_init("c7", /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._));
const $count__closure = /*@__PURE__*/ _closure($card_content__count);
const $count = /*@__PURE__*/ _fill_let("c5", 6, ($scope) => {
	_text($scope.c, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("c4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
