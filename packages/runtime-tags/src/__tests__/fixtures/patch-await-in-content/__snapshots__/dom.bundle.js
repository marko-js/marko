// template.marko
const $placeholder_content = _content$1("a0", "<em>loading</em>");
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
