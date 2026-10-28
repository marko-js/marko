// tags/keeper.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_signal("4 c1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("c2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/card.marko
const $inputonKeeperdiv_content__input_note = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_closure("b6", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b2"), 0));
const $inputonKeeperdiv_content__setup = ($scope) => {
	$inputonKeeperdiv_content__input_note($scope);
	$inputonKeeperdiv_content__v($scope);
};
const $inputonKeeperdiv_content__v = /*@__PURE__*/ _init_resume("b3", /*@__PURE__*/ _fill_closure("b5", 2, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._.c), 0, "b4"), 0));
const $inputonKeeperdiv_content = _content$1("b0", "<em><!> <!></em>", "D%c%", $inputonKeeperdiv_content__setup);
_content_resume($inputonKeeperdiv_content);
