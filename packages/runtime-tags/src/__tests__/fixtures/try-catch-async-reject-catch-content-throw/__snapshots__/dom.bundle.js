// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__value);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("nope"), 1));
};
const $catch_content2__err_message__OR__n = /*@__PURE__*/ _or(5, ($scope) => _text($scope.b, $scope.e ? (() => {
	throw new Error("from catch");
})() : $scope.d));
const $catch_content2__n = /*@__PURE__*/ _let(4, $catch_content2__err_message__OR__n);
const $catch_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content2__n($scope, +$scope.e + 1);
}));
const $catch_content2__setup = ($scope) => {
	$catch_content2__n($scope, 0);
	$catch_content2__setup__script($scope);
};
const $catch_content2__err_message = /*@__PURE__*/ _const(3, $catch_content2__err_message__OR__n);
const $catch_content2__err = ($scope, err) => $catch_content2__err_message($scope, err?.message);
const $catch_content2 = _content("a2", "<button> </button>", " D ", $catch_content2__setup, $catch_content2__err);
const $catch_content__outer = ($scope, outer) => _text($scope.a, outer?.message);
const $catch_content = _content("a3", "<p>outer caught <!></p>", "Db%", 0, $catch_content__outer);
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
