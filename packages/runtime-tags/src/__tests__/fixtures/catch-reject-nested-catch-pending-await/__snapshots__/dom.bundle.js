// template.marko
const never = new Promise(() => {});
_enable_catch();
const $catch_content2 = _content_resume("a0", "inner caught", "b");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a2", "caught: <!>", "b%b", 0, $catch_content__$params);
const $placeholder_content = _content_resume("a6", "loading outer...", "b");
const $await_content__changes = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.c, $scope._._.b), ($scope) => $scope._._, "a4");
const $await_content__setup__script = _script("a5", ($scope) => _on($scope.b, "change", function() {
	$changes($scope._._, $scope._._.b + 1);
}));
const $changes = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($await_content__changes));
