// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $rowcardCarddiv_content__row_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a1");
const $rowcardCarddiv_content = _content("a0", "<b> </b>", "D ", $rowcardCarddiv_content__row_label);
_content_resume($rowcardCarddiv_content);
