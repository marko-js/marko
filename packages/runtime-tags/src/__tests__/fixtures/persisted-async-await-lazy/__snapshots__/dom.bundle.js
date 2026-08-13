// template.marko
const $placeholder_content = _content_resume("a0", "loading");
const $count = /*@__PURE__*/ _let(12, ($scope) => _text($scope.e, $scope.m));
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.m + 1);
}));
