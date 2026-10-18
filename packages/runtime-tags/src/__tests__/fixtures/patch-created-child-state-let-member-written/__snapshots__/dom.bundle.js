// tags/card.marko
const $o = fill("b3", /*@__PURE__*/ _let(6, ($scope) => $o_label($scope, $scope.g?.label)));
const $a = fill("b1", /*@__PURE__*/ _let(5, ($scope) => $o($scope, { label: $scope.f })), 5);
const $o_label__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.h);
}));
const $o_label = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.a, $scope.h);
	$o_label__script($scope);
});
