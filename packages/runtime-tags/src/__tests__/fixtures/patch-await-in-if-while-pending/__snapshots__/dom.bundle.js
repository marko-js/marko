// template.marko
const $placeholder_content = _content$1("a2", "<em>loading</em>");
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a11", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
