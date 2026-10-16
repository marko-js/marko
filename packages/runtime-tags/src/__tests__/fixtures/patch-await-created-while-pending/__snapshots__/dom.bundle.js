// template.marko
const $placeholder_content = _content$1("a8", "<em>loading</em>");
const $count = /*@__PURE__*/ _fill_let("a10", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
