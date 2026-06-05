// template.marko
_enable_catch();
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $try_content__clickCount = /* @__PURE__ */ _closure_get(2, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.c)));
const $clickCount__closure = /* @__PURE__ */ _closure($try_content__clickCount);
const $clickCount__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope, $scope.c + 1);
}));
const $clickCount = /* @__PURE__ */ _let(2, ($scope) => {
	$clickCount__closure($scope);
	$clickCount__script($scope);
});
