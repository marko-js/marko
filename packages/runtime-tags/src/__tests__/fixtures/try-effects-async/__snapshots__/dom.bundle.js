// template.marko
_enable_catch();
const $await_content__value = ($scope, value) => _text($scope.a, value > 1 ? (() => {
	throw new Error("ERROR!");
})() : value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err = ($scope, err) => _text($scope.a, err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content_resume("a1", " ", " b", 0, $catch_content__$params);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $try_content__clickCount__script = _script("a3", ($scope) => $scope._.b.textContent = $scope._.d);
const $try_content__clickCount = /* @__PURE__ */ _closure_get(3, ($scope) => {
	$try_content__await_promise($scope, resolveAfter($scope._.d));
	$try_content__clickCount__script($scope);
});
const $clickCount = /* @__PURE__ */ _let(3, /* @__PURE__ */ _closure($try_content__clickCount));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope, $scope.d + 1);
}));
