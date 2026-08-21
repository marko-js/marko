// template.marko
const $catch_content = _content_resume("b0", "<div id=error>failed</div>");

// child.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
