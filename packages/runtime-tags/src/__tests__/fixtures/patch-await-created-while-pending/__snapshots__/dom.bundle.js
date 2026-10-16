// template.marko
const $placeholder_content = _content$1("a6", "<em>loading</em>");
const $count = /*@__PURE__*/ _fill_let("a8", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
