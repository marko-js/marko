// template.marko
const $page = /*@__PURE__*/ _draft(6, ($scope) => _text($scope.b, $scope.g));
const $_pageSource = _fill_const("a0", 5, ($scope) => $page($scope, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$page($scope, $scope.g + 1, 1);
}));
