// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a2"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
