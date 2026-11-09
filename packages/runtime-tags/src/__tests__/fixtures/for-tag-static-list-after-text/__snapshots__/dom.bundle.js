// template.marko
const $for_content__n = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.c), 3);
const $n = /*@__PURE__*/ _let(2, $for_content__n);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
