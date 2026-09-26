// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("a2", "LOADING");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__n__script = _script("a0", ($scope) => console.log("script n=" + $scope._.c));
const $try_content__n = /*@__PURE__*/ _closure_get(3, ($scope) => {
	$try_content__await_promise($scope, $scope._.c ? resolveAfter($scope._.c) : 0);
	$try_content__n__script($scope);
}, 0, "a1");
const $n = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__n));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
