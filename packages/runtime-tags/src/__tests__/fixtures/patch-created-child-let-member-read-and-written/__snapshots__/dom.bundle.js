// tags/card.marko
const $o = _let(5, ($scope) => $o_label($scope, $scope.f?.label));
const $o_label__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.g);
}));
const $o_label = /*@__PURE__*/ _const(6, ($scope) => {
	$o_label__script($scope);
	_text($scope.a, $scope.g);
});
