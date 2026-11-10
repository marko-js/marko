// tags/counter.marko
const $count = /*@__PURE__*/ _let(0, ($scope) => _return($scope, $scope.a));
const $setup__script$1 = _script("b0", ($scope) => $count($scope, 5));

// template.marko
const $placeholder_content = _content("a7", "loading");
const $await_content__local = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $await_content__n__OR__m = /*@__PURE__*/ _or(4, ($scope) => _text($scope.a, $scope._._.j + $scope._._.k));
const $await_content__n__script = _script("a2", ($scope) => console.log("e" + $scope._._.j));
const $await_content__n = /*@__PURE__*/ _closure_get(13, ($scope) => {
	$await_content__local($scope, $scope._._.j);
	$await_content__n__OR__m($scope);
	$await_content__n__script($scope);
}, ($scope) => $scope._._, "a3");
const $await_content__m = /*@__PURE__*/ _closure_get(14, $await_content__n__OR__m, ($scope) => $scope._._, "a4");
const $await_content__known = /*@__PURE__*/ _closure_get(15, ($scope) => _text($scope.c, $scope._._.l), ($scope) => $scope._._, "a5");
const $await_content__dynamic = /*@__PURE__*/ _closure_get(16, ($scope) => _text($scope.d, $scope._._.m), ($scope) => $scope._._, "a6");
const $n = /*@__PURE__*/ _let(9, /* @__PURE__ */ _closure($await_content__n));
const $m = /*@__PURE__*/ _let(10, /* @__PURE__ */ _closure($await_content__m));
const $setup__script = _script("a8", ($scope) => {
	_on($scope.e, "click", function() {
		$m($scope, +$scope.k + 1);
	});
	$n($scope, 5);
});
const $known = _var_resume("a0", /*@__PURE__*/ _const(11, /* @__PURE__ */ _closure($await_content__known)));
const $dynamic = _var_resume("a1", /*@__PURE__*/ _const(12, /* @__PURE__ */ _closure($await_content__dynamic)));
