// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__value);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("nope"), 1));
};
const $catch_content__n = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $catch_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content__n($scope, +$scope.f + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__n($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err = ($scope, err) => _text($scope.b, err?.message);
const $catch_content = _content("a2", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__err);
const $try_content__if = /*@__PURE__*/ _if(0, "<span>before</span><!><!>", "b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__if($scope, $scope._.d ? 0 : 1), 0, "a1");
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$show__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
