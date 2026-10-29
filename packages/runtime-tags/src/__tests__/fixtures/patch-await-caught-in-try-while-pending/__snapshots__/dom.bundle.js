// template.marko
const $catch_content = _content$1("a2", "<p>oops</p>");
const $placeholder_content = _content$1("a3", "<em>loading</em>");
const $count = _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
