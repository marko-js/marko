// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__c = /*@__PURE__*/ _if_closure_patch("b0", 0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if_content__setup = $if_content__c;
const $await_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $await_content__open = /*@__PURE__*/ _closure_get_patch("b3", 8, ($scope) => $await_content__if($scope, $scope._.g ? 0 : 1));
const $open = /*@__PURE__*/ _fill_let("b7", 6, /* @__PURE__ */ _closure($await_content__open));
const $setup__script = _script("b6", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => _text($scope.a, $scope._.g), 0, "a2", 0);
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
