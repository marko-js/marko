// total: 2983 (min) 1499 (brotli)
// tags/2counters.marko: 196 (min) 123 (brotli)
const $count__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count$1($scope, $scope.m + 1);
}));
const $count$1 = /* @__PURE__ */ _let(12, ($scope) => {
	_text($scope.b, $scope.m);
	$count__script($scope);
});
const $input_count1__OR__input_count1Change = /* @__PURE__ */ _or(8, ($scope) => $count$1($scope, $scope.g, $scope.h));
const $input_count = /* @__PURE__ */ _const(6, $input_count1__OR__input_count1Change);
const $count2__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$count2$1($scope, $scope.n + 1);
}));
const $count2$1 = /* @__PURE__ */ _let(13, ($scope) => {
	_text($scope.d, $scope.n);
	$count2__script($scope);
});
const $input_count2__OR__input_count2Change = /* @__PURE__ */ _or(11, ($scope) => $count2$1($scope, $scope.j, $scope.k));
const $input_count2 = /* @__PURE__ */ _const(9, $input_count2__OR__input_count2Change);

// template.marko: 209 (min) 119 (brotli)
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	$input_count($scope.a, $scope.d);
	_text($scope.b, $scope.d);
});
const $count2 = /* @__PURE__ */ _let(4, ($scope) => {
	$input_count2($scope.a, $scope.e);
	_text($scope.c, $scope.e);
});
function $count2Change($scope) {
	return (_new_count2) => {
		$count2($scope, _new_count2);
	};
}
function $count1Change($scope) {
	return (_new_count1) => {
		$count($scope, _new_count1);
	};
}
_resume("a1", $count2Change);
_resume("a0", $count1Change);
