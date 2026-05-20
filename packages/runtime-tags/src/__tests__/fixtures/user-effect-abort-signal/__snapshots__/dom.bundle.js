// total: 2321 (min) 1232 (brotli)
// template.marko: 132 (min) 110 (brotli)
const $a = /* @__PURE__ */ _let(5, ($scope) => _text($scope.a, $scope.f));
const $b = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $input_value__script = _script("a0", ($scope) => {
	{
		const previousValue = $a($scope, $scope.e + 1);
		$signal($scope, 0).onabort = () => $b($scope, previousValue);
	}
});
