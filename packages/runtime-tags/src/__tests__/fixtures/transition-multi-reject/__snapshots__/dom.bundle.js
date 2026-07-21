// template.marko
_enable_catch();
const $await_content2__b = /*@__PURE__*/ _render(($scope, b) => _text($scope.a, b));
const $await_content2__$params = ($scope, $params4) => $await_content2__b($scope, $params4[0]);
const $placeholder_content2 = _content_resume("a3", "LOADING B...", "b");
const $await_content__a = /*@__PURE__*/ _render(($scope, a) => _text($scope.a, a));
const $await_content__$params = ($scope, $params3) => $await_content__a($scope, $params3[0]);
const $catch_content__err_message = /*@__PURE__*/ _render(($scope, err_message) => _text($scope.a, err_message));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a1", "error: <!>", "b%b", 0, $catch_content__$params);
const $placeholder_content = _content_resume("a0", "LOADING A...", "b");
_enable_transition();
const $try_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content2__count = /*@__PURE__*/ _closure_get(5, ($scope) => $try_content2__await_promise($scope, resolveAfter($scope._.e * 10, 2)));
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__await_promise($scope, $scope._.e ? rejectAfter(/* @__PURE__ */ new Error("BOOM")) : resolveAfter($scope._.e)));
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.e));
const $count__closure = /*@__PURE__*/ _closure($try_content__count, $try_content2__count);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$count__render($scope);
	$count__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
