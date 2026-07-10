// template.marko
const $for_content__count = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.b, $scope._.f));
const $count = /*@__PURE__*/ _let(5, $for_content__count);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
