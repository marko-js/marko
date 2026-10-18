// tags/keeper.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("c2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/card.marko
const $xKeeperdiv_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $xKeeperdiv_content__c = /*@__PURE__*/ _shell_init("b3", _closure_resume("b10", /*@__PURE__*/ _fill_join_closure("b4", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $xKeeperdiv_content__dynamicTag($scope, $scope._.e)), 0)));
const $xKeeperdiv_content = _content$1("b0", "<!><!><!>", "b%", $xKeeperdiv_content__c);
_content_resume($xKeeperdiv_content);

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 6, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.g), 0, "a1"), 0);
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
