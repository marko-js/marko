// template.marko
const $n = /*@__PURE__*/ _let(2);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
