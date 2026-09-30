// template.marko
const $catch_content = _content$1("a6", "caught-a");
const $placeholder_content = _content$1("a5", "<em>wait</em>");
const $n = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
