// template.marko
const $await_content__n = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $await_promise = /* @__PURE__ */ _await_promise(1);
const $n__closure = /* @__PURE__ */ _closure($await_content__n);
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
const $n = /* @__PURE__ */ _let(2, ($scope) => {
	$await_promise($scope, resolveAfter($scope.c, 0));
	$n__closure($scope);
	$n__script($scope);
});
