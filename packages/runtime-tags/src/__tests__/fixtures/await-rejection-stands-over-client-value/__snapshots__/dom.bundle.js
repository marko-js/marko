// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a1", "caught <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content_resume("a0", "loading");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__value = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__await_promise($scope, $scope._.d ? $scope._.d : rejectAfter(/* @__PURE__ */ new Error("server"), 1)), 0, "a3", 3);
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$value__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$value($scope, +$scope.d + 1);
}));
