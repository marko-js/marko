// tags/show-await.marko
const $if_content__x = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.c)));
const $if_content__n = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $if_content__setup = ($scope) => {
	$if_content__x._($scope);
	$if_content__n($scope, 3);
};
const $await_content__if = /*@__PURE__*/ _if(0, "<p><!>:<!></p>", "D%c%", $if_content__setup);
const $await_content__x__$global_flag = /*@__PURE__*/ _fill_global_join("b4", ($scope) => $await_content__if($scope, $scope.c && $scope.$.flag ? 0 : 1), "flag");
const $await_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	$await_content__x__$global_flag($scope);
	$if_content__x($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(5, ($scope) => $input_promise($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
