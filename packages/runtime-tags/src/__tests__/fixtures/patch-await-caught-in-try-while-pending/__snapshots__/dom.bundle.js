// template.marko
const $catch_content = _content$1("a8", "<p>oops</p>");
const $placeholder_content = _content$1("a9", "<em>loading</em>");
const $count = /*@__PURE__*/ _fill_let("a11", 7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
