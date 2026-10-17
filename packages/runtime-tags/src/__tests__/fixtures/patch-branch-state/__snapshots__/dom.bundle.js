// template.marko
const $if_content__count = /*@__PURE__*/ _shell_init("a4", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.i)));
const $count = /*@__PURE__*/ _fill_let("a2", 8, ($scope) => {
	_text($scope.d, $scope.i);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
