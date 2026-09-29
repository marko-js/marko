// template.marko
const $await_content2__c = ($scope, c) => _text($scope.a, c);
const $await_content2__$params = ($scope, $params4) => $await_content2__c($scope, $params4[0]);
const $catch_content__e_message = ($scope, e_message) => _text($scope.a, e_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__e_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", "<s> </s>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content$1("a8", "<i>loading</i>");
const $await_content2 = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $if_content__pending = /*@__PURE__*/ _closure_get(7, ($scope) => $if_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a6");
const $if_content__setup = ($scope) => {
	$if_content__pending($scope);
	$await_content2($scope);
};
const $try_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $try_content__pending = /*@__PURE__*/ _closure_get(7, ($scope) => $try_content__if($scope, $scope._.f ? 0 : 1), 0, "a7");
const $pending = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($try_content__pending, $if_content__pending));
const $setup__script = _script("a9", ($scope) => _on($scope.b, "click", function() {
	$pending($scope, new Promise((r) => globalThis.__resolve = r));
}));
