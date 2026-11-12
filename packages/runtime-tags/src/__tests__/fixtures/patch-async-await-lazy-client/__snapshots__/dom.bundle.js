// template.marko
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $placeholder_content = _content$1("a4", "loading");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__n = /*@__PURE__*/ _closure_get_patch("a3", 7, ($scope) => $try_content__await_promise($scope, resolveAfter("v" + $scope._.g, $scope._.g)));
const $n = _let(6, /* @__PURE__ */ _closure($try_content__n));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.g + 1);
}));
