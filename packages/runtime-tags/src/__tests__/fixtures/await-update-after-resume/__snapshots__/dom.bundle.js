// total: 8370 (min) 3672 (brotli)
// template.marko: 416 (min) 224 (brotli)
_enable_catch();
const $await_content__value__script = _script("a0", ($scope) => console.log(`effect ran value=${$scope.c}`));
const $await_content__value = /* @__PURE__ */ _const(2, ($scope) => {
	_text($scope.a, $scope.c);
	$await_content__value__script($scope);
});
const $await_content__setup = _script("a1", ($scope) => console.log(`setup effect ran`));
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("a2", "loading...", "b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise(0, $await_content__$params);
const $try_content__value = /* @__PURE__ */ _closure_get(2, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.c)));
const $value__closure = /* @__PURE__ */ _closure($try_content__value);
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.a, $scope.c);
	$value__closure($scope);
});
const $setup__script = _script("a4", ($scope) => (async () => {
	await resolveAfter(0, 2);
	$value($scope, 1);
})());
