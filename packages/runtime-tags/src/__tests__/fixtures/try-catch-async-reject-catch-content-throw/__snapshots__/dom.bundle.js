// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params4) => $await_content__value($scope, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("nope"), 1));
};
const $catch_content2__err_message__OR__n = /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.f ? (() => {
	throw new Error("from catch");
})() : $scope.e));
const $catch_content2__n = /*@__PURE__*/ _let(5, $catch_content2__err_message__OR__n);
const $catch_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content2__n($scope, +$scope.f + 1);
}));
const $catch_content2__setup = ($scope) => {
	$catch_content2__n($scope, 0);
	$catch_content2__setup__script($scope);
};
const $catch_content2__err_message = /*@__PURE__*/ _const(4, $catch_content2__err_message__OR__n);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content("a2", "<button> </button>", " D ", $catch_content2__setup, $catch_content2__$params);
const $catch_content__outer_message = ($scope, outer_message) => _text($scope.a, outer_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__outer_message($scope, $params2[0]?.message);
const $catch_content = _content("a3", "<p>outer caught <!></p>", "Db%", 0, $catch_content__$params);
const $try_content2__if = /*@__PURE__*/ _if(0, "<span>before</span><!><!>", "b%", $if_content__setup);
const $try_content2__show = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content2__if($scope, $scope._._.d ? 0 : 1), ($scope) => $scope._._, "a1");
const $show__closure = /*@__PURE__*/ _closure($try_content2__show);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$show__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
