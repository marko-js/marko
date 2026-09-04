// template.marko
const $placeholder_content = _content_resume("a2", "loading");
const $count = /*@__PURE__*/ _let(12, ($scope) => _text($scope.e, $scope.m));
const $setup__script = _script("a6", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.m + 1);
}));
