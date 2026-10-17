// template.marko
const $placeholder_content = _content$1("a3", "<em>loading</em>");
const $count = /*@__PURE__*/ _fill_let("a5", 7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
