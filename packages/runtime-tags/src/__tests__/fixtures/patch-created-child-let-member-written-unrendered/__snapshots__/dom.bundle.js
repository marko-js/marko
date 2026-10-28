// tags/card.marko
const $o = _let(6, ($scope) => {
	$o_label($scope, $scope.g?.label);
	$o_n($scope, $scope.g?.n);
});
const $o_n = /*@__PURE__*/ _const(7, ($scope) => _text($scope.a, $scope.h));
const $o_label__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$shown($scope, $scope.i);
}));
const $o_label = /*@__PURE__*/ _const(8, $o_label__script);
const $shown = _let(9, ($scope) => _text($scope.b, $scope.j));
