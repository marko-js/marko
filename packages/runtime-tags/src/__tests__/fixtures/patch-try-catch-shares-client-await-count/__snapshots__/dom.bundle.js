// template.marko
const $await_content2__$params = ($scope, $params4) => _text($scope.a, $params4[0]);
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a1", "<s> </s>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content$1("a8", "<i>loading</i>");
const $await_content2 = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $if_content__pending = /*@__PURE__*/ _closure_get(7, ($scope) => $if_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a6");
const $if_content__setup = ($scope) => {
	$if_content__pending($scope);
	$await_content2($scope);
};
const $try_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $try_content__pending = /*@__PURE__*/ _closure_get_patch("a7", 7, ($scope) => $try_content__if($scope, $scope._.f ? 0 : 1));
const $pending = _let(5, /* @__PURE__ */ _closure($try_content__pending, $if_content__pending));
const $setup__script = _script("a9", ($scope) => _on($scope.b, "click", function() {
	$pending($scope, new Promise((r) => globalThis.__resolve = r));
}));
