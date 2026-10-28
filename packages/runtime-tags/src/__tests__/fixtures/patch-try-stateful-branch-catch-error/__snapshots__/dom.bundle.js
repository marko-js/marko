// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_p = /*@__PURE__*/ _fill_closure("a6", 5, /*@__PURE__*/ _closure_get(8, ($scope) => $try_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a1"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_p($scope);
	$await_content($scope);
};
const $catch_content__input_title = /*@__PURE__*/ _fill_closure("a5", 4, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0"), 0);
const $catch_content__setup = $catch_content__input_title;
const $catch_content__err_message = ($scope, err_message) => _text($scope.b, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a2", "<p><!> <!></p>", "D%c%", $catch_content__setup, $catch_content__$params);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", /* @__PURE__ */ _try(0, "<!><!><!>", "b%", $try_content__setup, 0, $catch_content));
const $show = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.g);
}));
