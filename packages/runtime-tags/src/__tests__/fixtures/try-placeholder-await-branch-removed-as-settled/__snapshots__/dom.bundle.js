// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("a1", "LOADING");
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__promise = /*@__PURE__*/ _closure_get(5, ($scope) => $if_content__await_promise($scope, $scope._._.d || "idle"), ($scope) => $scope._._, "a0");
const $if_content__setup = ($scope) => {
	$if_content__promise($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1), 0, "a3");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $promise__closure = /*@__PURE__*/ _closure($if_content__promise);
const $promise__script = _script("a4", ($scope) => $scope.d && $scope.d.then(() => {
	$show($scope, false);
}));
const $promise = /*@__PURE__*/ _let(3, ($scope) => {
	$promise__closure($scope);
	$promise__script($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$promise($scope, resolveAfter("loaded", 1));
}));
