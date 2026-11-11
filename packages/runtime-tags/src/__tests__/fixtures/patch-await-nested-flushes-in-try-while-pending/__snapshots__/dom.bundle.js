// template.marko
const $placeholder_content2 = _content$1("a1", "<em>inner loading</em>");
const $placeholder_content = _content$1("a2", "<em>outer loading</em>");
const $catch_content = _content$1("a3", "<em>failed</em>");
const $count = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a14", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
