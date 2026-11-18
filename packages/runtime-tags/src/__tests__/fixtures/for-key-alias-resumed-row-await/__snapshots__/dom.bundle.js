// template.marko
const $await_content__setup = ($scope) => _text($scope.b, $scope._._.M);
const $await_content__$params = ($scope, value) => _text($scope.a, value);
const $await_content = /*@__PURE__*/ _await_content(0, "<!>:<!>", "%c%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__item = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__await_promise($scope, resolveAfter($scope._.c, 1)));
const $if_content__setup = ($scope) => {
	$if_content__item._($scope);
	$await_content($scope);
};
const $for_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.c ? 0 : 1), 3);
const $show = /*@__PURE__*/ _let(2, $for_content__show);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));
