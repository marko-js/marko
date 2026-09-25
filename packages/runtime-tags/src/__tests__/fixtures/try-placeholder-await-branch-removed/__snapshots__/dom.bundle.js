// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter("loaded", 2));
};
const $placeholder_content = /*@__PURE__*/ _content("a0", "LOADING...");
pendingEnabled && (_resumed.a0 = $placeholder_content);
const $try_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1), 0, "a2", 2);
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
