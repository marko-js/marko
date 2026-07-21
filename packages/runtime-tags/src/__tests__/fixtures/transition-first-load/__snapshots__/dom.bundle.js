// template.marko
_enable_catch();
const $await_content__data = /*@__PURE__*/ _render(($scope, data) => _text($scope.a, JSON.stringify(data)));
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $try_content__id__render = /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope._.d));
const $try_content__id = /*@__PURE__*/ _closure_get(4, ($scope) => {
	$try_content__id__render($scope);
	$try_content__await_promise($scope, resolveAfter({ id: $scope._.d }));
});
const $id__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.d));
const $id__closure = /*@__PURE__*/ _closure($try_content__id);
const $id = /*@__PURE__*/ _let(3, ($scope) => {
	$id__render($scope);
	$id__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$id($scope, $scope.d + 1);
}));
