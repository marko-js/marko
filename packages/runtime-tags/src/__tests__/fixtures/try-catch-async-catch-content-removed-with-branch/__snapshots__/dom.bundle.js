// template.marko
const $await_content2__v = ($scope, v) => _text($scope.a, v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content(0, " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("nope"), 1));
};
const $await_content__count__script = _script("a0", ($scope) => document.getElementById("log").textContent += "[" + $scope._._._.e + "]");
const $await_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => {
	_text($scope.a, $scope._._._.e);
	$await_content__count__script($scope);
}, ($scope) => $scope._._._, "a1");
const $await_content = /*@__PURE__*/ _await_content(0, "<span> </span>", "D ", $await_content__count);
const $catch_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__await_promise($scope, resolveAfter("caught", 2));
};
const $catch_content = _content("a2", "<!><!><!>", "b%", $catch_content__setup);
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, false);
	});
});
