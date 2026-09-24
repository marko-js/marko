// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b0", 5, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f)));
const $if = /*@__PURE__*/ _if(2, "<section><!></section>", "D%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $wrap_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $wrap_content__input_promise = /*@__PURE__*/ _fill_join_closure("a0", 3, /*@__PURE__*/ _closure_get(4, ($scope) => $wrap_content__await_promise($scope, $scope._.d), 0, "a4", 3), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_promise($scope);
	$await_content($scope);
};
const $wrap_content = _content_resume("a0", "<!><!><!>", "b%", $wrap_content__setup);
