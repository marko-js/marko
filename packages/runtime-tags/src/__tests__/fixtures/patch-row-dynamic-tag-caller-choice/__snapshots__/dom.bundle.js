// tags/rowsy.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _if_closure_patch("b14", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $Card_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__content);
const $Card_content__label = ($scope, label) => {
	_text($scope.a, label);
	$Card_content__if($scope, label ? 0 : 1);
};
const $Card_content__$params = ($scope, $params2) => {
	$Card_content__label($scope, $params2[0].label);
	$Card_content__content($scope, $params2[0].content);
};
const $Card_content__content = /*@__PURE__*/ _const(5, $if_content__content);
const $Card_content = _content$1("b1", "<p><!><!></p>", "D%b%", 0, $Card_content__$params);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__input_card__OR__Card__OR__Label__OR__tag = /*@__PURE__*/ _or_patch("b6", 3, ($scope) => $for_content__dynamicTag($scope, $scope._.h ? $scope._.i : "span", ($_) => ({
	label: $scope.c,
	content: $scope._.k
})), 3);
const $for_content__input_card = /*@__PURE__*/ _for_closure_patch("b9", 2, $for_content__input_card__OR__Card__OR__Label__OR__tag, 12);
const $Label_content__input_label = /*@__PURE__*/ _closure_get_patch("b4", 11, ($scope) => _text($scope.a, $scope._.f), 0, "b8", 0);
const $Label_content__setup = ($scope) => {
	$Label_content__input_label($scope);
	$Label_content__n($scope);
};
const $Label_content__n = /*@__PURE__*/ _closure_get_patch("b5", 14, ($scope) => _text($scope.b, $scope._.j));
const $Label_content = _content$1("b2", "<em><!> <!></em>", "D%c%", $Label_content__setup);
_content_resume($Label_content);
const $n__closure = /*@__PURE__*/ _closure($Label_content__n);
const $n = /*@__PURE__*/ _fill_let("b10", 9, ($scope) => {
	_text($scope.b, $scope.j);
	$n__closure($scope);
});
const $setup__script$1 = _script("b7", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.j + 1);
}));
const $input_card = /*@__PURE__*/ _const(7, $for_content__input_card);

// template.marko
const $card = _let(6, ($scope) => $input_card($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$card($scope, !$scope.g);
}));
