// template.marko
_enable_catch();
const $await_content__value = /*@__PURE__*/ _render(($scope, value) => _text($scope.a, value));
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
const $for_content__i = /*@__PURE__*/ _render(($scope, i) => _text($scope.a, i));
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.d)));
const $for = /*@__PURE__*/ _for_of(1, "<li> </li>", "D l", 0, $for_content__$params);
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	$for($scope, [[...Array($scope.d).keys()]]);
	$count__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
