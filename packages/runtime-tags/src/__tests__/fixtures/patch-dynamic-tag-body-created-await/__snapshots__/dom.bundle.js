// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_signal("4 b1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $await_content__input_note = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_closure("a7", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a1"), 0));
const $await_content__setup = $await_content__input_note;
const $await_content__w = ($scope, w) => _text($scope.b, w);
const $await_content__$params = ($scope, $params2) => $await_content__w($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em><!> <!></em>", "D%c%", $await_content__setup);
const $inputonCarddiv_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $inputonCarddiv_content__input_w = /*@__PURE__*/ _init_resume("a5", _closure_resume("a10", /*@__PURE__*/ _fill_closure("a6", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $inputonCarddiv_content__await_promise($scope, $scope._.e)), 0)));
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_w($scope);
	$await_content($scope);
};
const $inputonCarddiv_content = _content$1("a4", "<!><!><!>", "b%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
