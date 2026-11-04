// template.marko
const $await_content__open = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => _text($scope.b, $scope.f ? "close" : "open"));
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$await_content__open($scope, !$scope.f);
}));
