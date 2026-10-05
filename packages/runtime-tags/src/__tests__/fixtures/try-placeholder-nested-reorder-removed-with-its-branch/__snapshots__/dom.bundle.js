// template.marko
const $placeholder_content = _content("a3", "loading");
const $await_content__count__script = _script("a0", ($scope) => document.getElementById("log").textContent += "[" + $scope._._._.e + "]");
const $await_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => {
	_text($scope.a, $scope._._._.e);
	$await_content__count__script($scope);
}, ($scope) => $scope._._._, "a1");
const $await_content = /*@__PURE__*/ _await_content(0, "<span> </span>", "D ", $await_content__count);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter(1, 1));
};
const $try_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $try_content__inner = /*@__PURE__*/ _closure_get(7, ($scope) => $try_content__if($scope, $scope._.f ? 0 : 1), 0, "a2");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
});
const $inner = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($try_content__inner));
const $setup__script = _script("a4", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$inner($scope, false);
	});
});
