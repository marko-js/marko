// template.marko
const $placeholder_content = _content$1("a6", "<em>loading</em>");
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
