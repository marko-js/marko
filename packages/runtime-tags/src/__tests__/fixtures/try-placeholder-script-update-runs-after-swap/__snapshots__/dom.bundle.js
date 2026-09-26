// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("a0", "LOADING");
const $try_content__n__script = _script("a2", ($scope) => console.log("script n=" + $scope._.d + " connected=" + $scope.a.isConnected));
const $try_content__n = /*@__PURE__*/ _closure_get(5, ($scope) => {
	_text($scope.b, $scope._.d);
	$try_content__n__script($scope);
}, 0, "a3");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $try_content__m = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content__await_promise($scope, $scope._.e ? resolveAfter($scope._.e) : 0), 0, "a4");
const $n = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($try_content__n));
const $m = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($try_content__m));
const $setup__script = _script("a5", ($scope) => {
	_on($scope.a, "click", function() {
		$m($scope, +$scope.e + 1);
	});
	_on($scope.b, "click", function() {
		$n($scope, +$scope.d + 1);
	});
});
