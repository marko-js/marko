// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $if_content__c = /*@__PURE__*/ _let(2, ($scope) => $if_content__dynamicTag($scope, $scope.c));
const $if_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$if_content__c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _fill_closure("a2", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a0"), 0);
const $card_content = _content$1("a1", "<em>static <!></em>", "Db%", $card_content__input_label);
