// template.marko
const $placeholder_content2 = _content$1("a8", "<em>inner loading</em>");
const $placeholder_content = _content$1("a11", "<em>outer loading</em>");
const $count = /*@__PURE__*/ _fill_let("a13", 8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a12", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
