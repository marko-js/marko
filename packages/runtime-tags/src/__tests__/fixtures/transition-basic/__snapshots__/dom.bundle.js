// template.marko
_enable_catch();
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $try_content__count = /* @__PURE__ */ _closure_get(5, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.f)));
const $count__closure = /* @__PURE__ */ _closure($try_content__count);
const $count__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.c, $scope.f);
	$count__closure($scope);
	$count__script($scope);
});
const $other__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$other($scope, $scope.g + 1);
}));
const $other = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$other__script($scope);
});
