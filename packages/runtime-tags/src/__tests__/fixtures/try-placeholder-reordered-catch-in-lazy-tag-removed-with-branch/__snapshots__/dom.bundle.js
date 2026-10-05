// child.marko
const $placeholder_content2 = _content("a2", "loading");
const $await_content2__setup = /* @__PURE__ */ _closure_get(7, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._);
const $await_content2__x = ($scope, x) => _text($scope.b, x);
const $await_content2__$params = ($scope, $params4) => $await_content2__x($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, "<!><!>", "%b%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("nope"), 2));
};
const $await_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content__v = /*@__PURE__*/ _const(2);
const $placeholder_content = _content("a3", "outer loading");
const $await_content = /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $catch_content__count__script = _script("a0", ($scope) => document.getElementById("log").textContent += "[" + $scope._._.e + "]");
const $catch_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => {
	_text($scope.a, $scope._._.e);
	$catch_content__count__script($scope);
}, ($scope) => $scope._._, "a1");
const $catch_content = _content("a4", "<span> </span>", "D ", $catch_content__count);
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a5", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, false);
	});
});
