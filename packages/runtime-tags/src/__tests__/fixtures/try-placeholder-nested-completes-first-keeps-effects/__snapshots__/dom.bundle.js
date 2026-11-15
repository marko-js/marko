// template.marko
const $placeholder_content2 = _content("a6", "inner");
const $placeholder_content = _content("a7", "outer");
const $await_content3__value = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.b, $scope._.c), 0, "a9");
const $await_content3__setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$value($scope._, +$scope._.c + 1);
}));
const $await_content2__value = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.b, $scope._._._.c), ($scope) => $scope._._._, "a3");
const $await_content2__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$value($scope._._._, +$scope._._._.c + 1);
}));
const $try_content2__value = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.c, $scope._._.c), ($scope) => $scope._._, "a5");
const $try_content2__setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$value($scope._._, +$scope._._.c + 1);
}));
const $await_content__value = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.b, $scope._._.c), ($scope) => $scope._._, "a1");
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$value($scope._._, +$scope._._.c + 1);
}));
const $value = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($await_content__value, $try_content2__value, $await_content2__value, $await_content3__value));
