// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $inputtag_content__r_label = /*@__PURE__*/ _closure_get_patch("a2", 10, ($scope) => _text($scope.a, $scope._.d), 0, "a3", 0);
const $inputtag_content = _content$1("a1", " ", " ", $inputtag_content__r_label);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputtag_content);
const $for_content__input_tag__OR__input_label__OR__r_label = /*@__PURE__*/ _or_patch("a6", 4, ($scope) => $for_content__dynamicTag($scope, $scope._._._.f, ($_) => ({ onClick: $onClick($scope) })), 2);
const $for_content__input_tag = /*@__PURE__*/ _closure_get_patch("a4", 8, $for_content__input_tag__OR__input_label__OR__r_label, ($scope) => $scope._._._, "a12", 0);
const $for_content__setup = ($scope) => {
	$for_content__input_tag($scope);
	$for_content__input_label($scope);
};
const $for_content__input_label = /*@__PURE__*/ _closure_get_patch("a5", 9, $for_content__input_tag__OR__input_label__OR__r_label, ($scope) => $scope._._._, "a13", 0);
const $for_content__r_label__closure = /*@__PURE__*/ _closure($inputtag_content__r_label);
const $for_content__r_label = /*@__PURE__*/ _const(3, ($scope) => {
	$for_content__r_label__closure($scope);
	$for_content__input_tag__OR__input_label__OR__r_label($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__r_label($scope, $params2[0]?.label);
const $card_content__for = /*@__PURE__*/ _for_of(0, "<li><!></li>", "D%", $for_content__setup, $for_content__$params);
const $card_content__input_rows = /*@__PURE__*/ _closure_get_patch("a10", 7, ($scope) => $card_content__for($scope, [$scope._._.e, "id"]), ($scope) => $scope._._, "a11", 0);
const $card_content = _content$1("a8", "<ul></ul>", " ", $card_content__input_rows);
const $onClick = ($scope) => function() {
	console.log($scope.d, $scope._._._.g);
};
_bind_resume("a0 >>>g d", $onClick);
