// template.marko
const $placeholder_content3 = _content$1("a11", "<em>inner loading</em>");
const $placeholder_content2 = _content$1("a14", "<em>middle loading</em>");
const $placeholder_content = _content$1("a17", "<em>outer loading</em>");
const $count = _let(9, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script("a18", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.j + 1);
}));
