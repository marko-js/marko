// template.marko
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("a1", "<p>loading</p>");
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _fill_join_closure("a3", 5, /*@__PURE__*/ _closure_get(7, ($scope) => $try_content__await_promise($scope, $scope._._.f), ($scope) => $scope._._, "a0"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = fill("a4", /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1)));
