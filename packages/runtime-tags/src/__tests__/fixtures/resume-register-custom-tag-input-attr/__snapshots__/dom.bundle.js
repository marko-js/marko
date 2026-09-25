// template.marko
const $heading_content = _content("a0", "input driven: content registered, body dropped");
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
