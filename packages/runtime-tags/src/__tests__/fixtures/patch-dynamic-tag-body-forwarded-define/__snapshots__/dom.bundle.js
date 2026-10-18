// tags/fwd.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _fill_join("b3", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $Wrap_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__content);
const $Wrap_content__open = /*@__PURE__*/ _fill_let("b4", 5, ($scope) => $Wrap_content__if($scope, $scope.f ? 0 : 1));
const $Wrap_content__setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$Wrap_content__open($scope, !$scope.f);
}));
const $globalppWrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $globalppWrap_content__input_content = /*@__PURE__*/ _shell_init("b5", _closure_resume("b10", /*@__PURE__*/ _fill_join_closure("b7", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $globalppWrap_content__dynamicTag($scope, $scope._.d)), 0)));
const $globalppWrap_content = _content$1("b1", "<!><!><!>", "b%", $globalppWrap_content__input_content);
_content_resume($globalppWrap_content);

// template.marko
const $inputonFwddiv_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a1"), 0);
const $inputonFwddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonFwddiv_content__input_note);
_content_resume($inputonFwddiv_content);
