// tags/card.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__c__OR__i = /*@__PURE__*/ _or_patch("b4", 3, ($scope) => $for_content__dynamicTag($scope, $scope._.f, ($_) => ({ n: $scope.c })));
const $for_content__c = /*@__PURE__*/ _for_closure(1, $for_content__c__OR__i, 6);
const $c = /*@__PURE__*/ _fill_let("b2", 5, $for_content__c);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $Row_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => _text($scope.a, $scope._.e), 0, "a2", 0);
const $Row_content__setup = $Row_content__input_label;
const $Row_content__n = ($scope, n) => _text($scope.b, n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content$1("a0", $Row_content__template, $Row_content__walks, $Row_content__setup, $Row_content__$params);
