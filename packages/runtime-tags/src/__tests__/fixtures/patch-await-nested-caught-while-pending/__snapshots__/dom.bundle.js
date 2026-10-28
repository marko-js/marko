// template.marko
const $catch_content = _content$1("a2", "<em>inner failed</em>");
const $placeholder_content2 = _content$1("a3", "<em>inner loading</em>");
const $placeholder_content = _content$1("a4", "<em>outer loading</em>");
const $count = /*@__PURE__*/ _let(10, ($scope) => _text($scope.b, $scope.k));
const $setup__script = _script("a21", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.k + 1);
}));
