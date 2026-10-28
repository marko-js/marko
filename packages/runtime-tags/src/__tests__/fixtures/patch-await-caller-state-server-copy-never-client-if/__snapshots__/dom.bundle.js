// tags/show-await.marko
const $if_content__input_label = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_join_closure("b7", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.d, $scope._._.e), ($scope) => $scope._._, "b2"), 0));
const $if_content__n = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__x._($scope);
	_style_shell($scope, "a");
	_style_rule_item($scope.a, "--M_b0", "red");
	$if_content__n($scope, 1);
};
const $if_content__x = /*@__PURE__*/ _init_resume("b3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.d)));
const $await_content__if = /*@__PURE__*/ _if(1, "<style></style><b class=b><!>:<!>:<!></b>", " bD%c%c%", $if_content__setup);
const $await_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$await_content__if($scope, $scope.d ? 0 : 1);
	$if_content__x($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.h)));
const $p = /*@__PURE__*/ _let(7, $if_content__p);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
