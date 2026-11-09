// template.marko
const $count__script = _script("a1", ($scope) => _lifecycle($scope, { onUpdate: function() {
	const n = $scope.c;
	onAbort($scope, 0, () => console.log("abort", n));
} }));
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	$signalReset($scope, 0);
	_text($scope.b, $scope.c);
	$count__script($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
