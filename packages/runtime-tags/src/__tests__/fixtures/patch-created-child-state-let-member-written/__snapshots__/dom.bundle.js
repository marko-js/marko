// tags/card.marko
const $o = _let(6, ($scope) => $o_label($scope, $scope.g?.label));
const $a = _let(5, ($scope) => $o($scope, { label: $scope.f }));
const $o_label__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.h);
}));
const $o_label = /*@__PURE__*/ _const(7, ($scope) => {
	$o_label__script($scope);
	_text($scope.a, $scope.h);
});
