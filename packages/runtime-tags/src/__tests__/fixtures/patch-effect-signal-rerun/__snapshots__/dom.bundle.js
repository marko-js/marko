// template.marko
const $clicks = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.g + 1);
}));
const $input_label__script = _script("a0", ($scope) => {
	$scope.c.dataset.label = $scope.f;
	$scope.a.addEventListener("click", () => {
		$scope.c.textContent += "x";
	}, { signal: $signal($scope, 0) });
});
