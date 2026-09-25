// template.marko
const $await_content3__y = ($scope, y) => _text($scope.a, y);
const $await_content3__$params = ($scope, $params4) => $await_content3__y($scope, $params4[0]);
const $await_content2__x = ($scope, x) => _text($scope.a, x);
const $await_content2__$params = ($scope, $params3) => $await_content2__x($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, " ", " ");
const $placeholder_content3__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $placeholder_content3__setup = ($scope) => {
	$await_content2($scope);
	$placeholder_content3__await_promise($scope, resolveAfter("c", 4));
};
const $placeholder_content3 = /*@__PURE__*/ _content("a1", "C loading <!><!>", "b%", $placeholder_content3__setup);
pendingEnabled && (_resumed.a1 = $placeholder_content3);
const $await_content__x = ($scope, x) => _text($scope.a, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $placeholder_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $placeholder_content2__setup = ($scope) => {
	$await_content($scope);
	$placeholder_content2__await_promise($scope, resolveAfter("b", 8));
};
const $placeholder_content2 = /*@__PURE__*/ _content("a4", "B loading <!><!>", "b%", $placeholder_content2__setup);
pendingEnabled && (_resumed.a4 = $placeholder_content2);
const $placeholder_content = /*@__PURE__*/ _content("a6", "A loading");
pendingEnabled && (_resumed.a6 = $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content3__$params);
const $if_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => $if_content__await_promise($scope, resolveAfter($scope._._._._.c)), ($scope) => $scope._._._._, "a0", 2);
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$await_content3($scope);
};
const $try_content3__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $try_content3__count = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content3__if($scope, $scope._._._.c ? 0 : 1), ($scope) => $scope._._._, "a3", 2);
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content3__count, $if_content__count));
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
