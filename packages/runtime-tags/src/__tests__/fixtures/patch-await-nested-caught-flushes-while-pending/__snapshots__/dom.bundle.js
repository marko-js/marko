// template.marko
const $catch_content = _content$1("a9", "<em>inner failed</em>");
const $placeholder_content2 = _content$1("a8", "<em>inner loading</em>");
const $placeholder_content = _content$1("a12", "<em>outer loading</em>");
const $count = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a13", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
