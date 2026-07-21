// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope._.d)));
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.d));
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	$count__render($scope);
	$for_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.d + 1);
}));
