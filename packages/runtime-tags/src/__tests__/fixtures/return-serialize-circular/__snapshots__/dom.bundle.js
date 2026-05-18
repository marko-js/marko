// total: 2580 (min) 1333 (brotli)
// tags/setter.marko: 56 (min) 60 (brotli)
const $input_value__OR__setter = /* @__PURE__ */ _or(5, ($scope) => _return($scope, ($scope.d, $scope.e)));
const $input_value = /* @__PURE__ */ _const(3, $input_value__OR__setter);
function $setter($scope) {
	return function() {
		$scope.c(1);
	};
}
_resume("b0", $setter);

// template.marko: 162 (min) 120 (brotli)
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	$input_value($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setCount__script = _script("a2", ($scope) => $scope.e());
const $setCount = _var_resume("a1", /* @__PURE__ */ _const(4, $setCount__script));
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("a0", $valueChange);
