// template.marko
const $placeholder_content = _content("a1", "loading");
const $await_content3__setup = /* @__PURE__ */ _closure_get(8, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._);
const $await_content3__x = ($scope, x) => _text($scope.b, x);
const $await_content3__$params = ($scope, $params4) => $await_content3__x($scope, $params4[0]);
const $await_content3 = /*@__PURE__*/ _await_content(0, "<!><!>", "%b%", $await_content3__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content3__$params);
const $try_content2__setup = ($scope) => {
	$await_content3($scope);
	$try_content2__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("nope"), 2));
};
const $await_content2__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $await_content2__setup = ($scope) => $await_content2__try($scope);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content2__v = /*@__PURE__*/ _const(2);
const $await_content2 = /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%", $await_content2__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $await_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f), 0, "a3");
const $catch_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a0");
const $catch_content = _content("a2", "<span class=caught> </span>", "D ", $catch_content__count);
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count, $await_content__count);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$count__closure($scope);
});
const $if = /*@__PURE__*/ _if(3, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a4", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.f + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, false);
	});
});
