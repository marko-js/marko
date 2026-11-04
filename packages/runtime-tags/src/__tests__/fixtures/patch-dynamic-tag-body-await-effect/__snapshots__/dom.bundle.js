// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("b0", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a8", 0);
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_note($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _closure_get_patch("a2", 9, ($scope) => _text($scope.b, $scope._.c), 0, "a4", 0);
const $inputonCarddiv_content = /*@__PURE__*/ _content$1("a0", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_closures_resume($inputonCarddiv_content);
const $input_note__script = _script_patch("a7 e", ($scope) => $scope.a.textContent = $scope.e);
