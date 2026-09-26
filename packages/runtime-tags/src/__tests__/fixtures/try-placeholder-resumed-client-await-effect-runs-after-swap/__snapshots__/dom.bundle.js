// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content__setup = _script("a0", ($scope) => console.log("if script ran"));
const $placeholder_content = _content("a1", "loading");
const $try_content__if = /*@__PURE__*/ _if(0, "<span>shown</span>", 0, $if_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => {
	$try_content__if($scope, $scope._.c ? 0 : 1);
	$try_content__await_promise($scope, resolveAfter($scope._.c ? "client" : "server", 1));
}, 0, "a3");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
