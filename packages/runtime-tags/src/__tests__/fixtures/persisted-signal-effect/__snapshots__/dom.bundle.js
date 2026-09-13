// template.marko
const $input_label__OR__count__script = _script("a1", ($scope) => {
	{
		const ac = new AbortController();
		$scope.a.dataset.v = `${$scope.e}:${$scope.f}`;
		$signal($scope, 0).addEventListener("abort", () => {
			$scope.a.dataset.v = "gone";
		}, { signal: ac.signal });
	}
});
const $input_label__OR__count = /*@__PURE__*/ _or(6, ($scope) => {
	$signalReset($scope, 0);
	$input_label__OR__count__script($scope);
});
const $count = /*@__PURE__*/ _let(5, $input_label__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
