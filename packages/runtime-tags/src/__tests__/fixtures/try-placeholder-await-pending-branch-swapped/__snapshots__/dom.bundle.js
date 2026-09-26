// template.marko
const $await_content2__value = ($scope, value) => _text($scope.a, value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, " ", " ");
const $else_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $else_content__setup = ($scope) => {
	$await_content2($scope);
	$else_content__await_promise($scope, resolveAfter("tab 2", 2));
};
const $placeholder_content = _content("a1", "LOADING");
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__tab = /*@__PURE__*/ _closure_get(3, ($scope) => $if_content__await_promise($scope, $scope._._.c === 1 ? new Promise(() => {}) : "ready"), ($scope) => $scope._._, "a0");
const $if_content__setup = ($scope) => {
	$if_content__tab($scope);
	$await_content($scope);
};
const $try_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup, "<!><!><!>", "b%", $else_content__setup);
const $try_content__tab = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._.c < 2 ? 0 : 1), 0, "a3");
const $tab = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__tab, $if_content__tab));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$tab($scope, +$scope.c + 1);
}));
