// tags/getter.marko
const $input_label = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $_return($scope)));
const $_return = ($scope) => () => console.log("get", $scope.c);
_bind_resume("c0 c", $_return);

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
const $inputtag_content = _content$1("a1", "x");
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 6, ($scope) => $input_label($scope.a, $scope._._.e), ($scope) => $scope._._, "a7", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_tag($scope);
	_var($scope, 0, $card_content__get);
};
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(2, $inputtag_content);
const $card_content__input_tag__OR__get = /*@__PURE__*/ _or_patch("a3", 4, ($scope) => $card_content__dynamicTag($scope, $scope._._.f, ($_) => ({ onClick: $scope.d })), 1, 1);
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a4", 7, $card_content__input_tag__OR__get, ($scope) => $scope._._, "a8", 0);
const $card_content__get = _var_resume("a0", /*@__PURE__*/ _const(3, $card_content__input_tag__OR__get));
const $card_content = _content$1("a5", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&b%c`)(""), $card_content__setup);
