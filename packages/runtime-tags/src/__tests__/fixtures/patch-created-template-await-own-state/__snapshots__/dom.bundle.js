// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join_closure("b4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $if_content__dynamicTag($scope, $scope._._.e), ($scope) => $scope._._, "b0"), 0);
const $await_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $await_content__x = ($scope, x) => $await_content__if($scope, x ? 0 : 1);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $n = /*@__PURE__*/ _fill_let("b5", 5, ($scope) => $await_promise($scope, Promise.resolve($scope.f)));
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.f ? 0 : 1);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a2"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
