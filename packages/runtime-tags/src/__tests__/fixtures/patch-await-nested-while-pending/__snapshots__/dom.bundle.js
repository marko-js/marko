// template.marko
const $placeholder_content2 = _content$1("a10", "<em>inner loading</em>");
const $placeholder_content = _content$1("a15", "<em>outer loading</em>");
const $count = /*@__PURE__*/ _fill_let("a17", 8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a16", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
