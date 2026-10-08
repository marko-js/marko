// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content$1("a4", "loading");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__n = _shell_closure_get("a9", 7, ($scope) => $try_content__await_promise($scope, resolveAfter("v" + $scope._.g, $scope._.g)), 0, "a3");
const $n = /*@__PURE__*/ _fill_let("a6", 6, /* @__PURE__ */ _closure($try_content__n));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.g + 1);
}));
