// template.marko
const $MyTag_content__count = /*@__PURE__*/ _render(($scope, count) => _text($scope.b, count));
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	$count__render($scope);
	$MyTag_content__count($scope.c, $scope.d);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
