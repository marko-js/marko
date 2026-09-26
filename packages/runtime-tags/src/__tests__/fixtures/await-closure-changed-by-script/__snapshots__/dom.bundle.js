// template.marko
const $placeholder_content = _content("a3", "loading");
const $await_content__local = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $await_content__n__OR__m = /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope._._.c + $scope._._.d));
const $await_content__n__script = _script("a0", ($scope) => console.log("e" + $scope._._.c));
const $await_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => {
	$await_content__local($scope, $scope._._.c);
	$await_content__n__OR__m($scope);
	$await_content__n__script($scope);
}, ($scope) => $scope._._, "a1");
const $await_content__m = /*@__PURE__*/ _closure_get(5, $await_content__n__OR__m, ($scope) => $scope._._, "a2");
const $n = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($await_content__n));
const $m = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($await_content__m));
const $setup__script = _script("a5", ($scope) => {
	_on($scope.a, "click", function() {
		$m($scope, +$scope.d + 1);
	});
	$n($scope, 5);
});
