// tags/fnchild.marko
const $template = "<!><!><!>";
const $inputtag_content__input_label = /*@__PURE__*/ _closure_get_patch("c2", 6, ($scope) => _text($scope.a, $scope._.e), 0, "c3", 0);
const $inputtag_content = _content$1("c1", " ", " ", $inputtag_content__input_label);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0, $inputtag_content);
const $input_tag__OR__input_label = /*@__PURE__*/ _or_patch("c4", 5, ($scope) => $dynamicTag$1($scope, $scope.d, ($_) => ({ onClick: $onClick($scope) })));
const $input_tag = /*@__PURE__*/ _const(3, $input_tag__OR__input_label);
const $input_label__closure = /*@__PURE__*/ _closure($inputtag_content__input_label);
const $input_label = /*@__PURE__*/ _const(4, ($scope) => {
	$input_label__closure($scope);
	$input_tag__OR__input_label($scope);
});
const $onClick = ($scope) => function() {
	console.log("x", $scope.e);
};
_bind_resume("c0 e", $onClick);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => $input_label($scope.a, $scope._._.e), ($scope) => $scope._._, "a4", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_tag($scope);
};
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => $input_tag($scope.a, $scope._._.f), ($scope) => $scope._._, "a5", 0);
const $card_content = _content$1("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $card_content__setup);
