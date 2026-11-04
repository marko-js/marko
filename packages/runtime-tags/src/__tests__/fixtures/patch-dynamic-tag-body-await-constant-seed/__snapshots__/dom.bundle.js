// tags/keeper.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("c0", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("c2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/card.marko
const $inputonKeeperdiv_content__input_note = /*@__PURE__*/ _closure_get_patch("b1", 7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b7", 0);
const $inputonKeeperdiv_content__setup = ($scope) => {
	$inputonKeeperdiv_content__input_note($scope);
	$inputonKeeperdiv_content__v($scope);
};
const $inputonKeeperdiv_content__v = /*@__PURE__*/ _closure_get_patch("b2", 8, ($scope) => _text($scope.b, $scope._.c), 0, "b3", 0);
const $inputonKeeperdiv_content = _content$1("b0", "<em><!> <!></em>", "D%c%", $inputonKeeperdiv_content__setup);
_content_resume($inputonKeeperdiv_content);
