// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__c = /*@__PURE__*/ _fill_signal("4 b0", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if_content__setup = $if_content__c;
const $await_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $await_content__open = /*@__PURE__*/ _init_resume("b11", /*@__PURE__*/ _closure_get(8, ($scope) => $await_content__if($scope, $scope._.g ? 0 : 1), 0, "b4"));
const $open = /*@__PURE__*/ _fill_let("b9", 6, /* @__PURE__ */ _closure($await_content__open));
const $setup__script = _script("b7", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a5", 6, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.g), 0, "a2"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
