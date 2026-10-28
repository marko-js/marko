// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputonCarddiv_content2__input_note = /*@__PURE__*/ _init_resume("a12", /*@__PURE__*/ _fill_join_closure("a6", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a13"), 1));
const $inputonCarddiv_content2 = _content$1("a9", "<b> </b>", "D ", $inputonCarddiv_content2__input_note);
_content_resume($inputonCarddiv_content2);
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a6", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.g), ($scope) => $scope._._, "a2"), 0));
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_note($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _fill_join_closure("a5", 2, /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.b, $scope._.c), 0, "a4"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
