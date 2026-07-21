// template.marko
_enable_catch();
const $await_content__data = /*@__PURE__*/ _render(($scope, data) => _text($scope.a, JSON.stringify(data)));
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $try_content__id__render = /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope._.c));
const $try_content__id = /*@__PURE__*/ _closure_get(3, ($scope) => {
	$try_content__id__render($scope);
	$try_content__await_promise($scope, resolveAfter({ id: $scope._.c }, 4));
});
const $id__render = /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.c));
const $id__closure = /*@__PURE__*/ _closure($try_content__id);
const $id = /*@__PURE__*/ _let(2, ($scope) => {
	$id__render($scope);
	$id__closure($scope);
});
const $setup__script = _script("a2", ($scope) => (async () => {
	await resolveAfter(0, 1);
	$id($scope, 2);
	await resolveAfter(0, 2);
	$id($scope, 3);
})());
