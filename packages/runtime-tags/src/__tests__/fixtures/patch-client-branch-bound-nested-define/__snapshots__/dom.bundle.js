// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inn_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 6, ($scope) => _text($scope.b, $scope._._._._.e), ($scope) => $scope._._._._, "a8", 0);
const $Inn_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._._._._.e);
}));
const $Inn_content__setup = ($scope) => {
	$Inn_content__input_label($scope);
	$Inn_content__setup__script($scope);
};
const $Inn_content = _content$1("a0", "<b> </b>", " D ", $Inn_content__setup);
const $Outer_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $Outer_content__input_tag__OR__Inn = /*@__PURE__*/ _or(2, ($scope) => $Outer_content__dynamicTag($scope, $scope._._._.f, ($_) => ({ content: $scope.b })));
const $Outer_content__input_tag = /*@__PURE__*/ _closure_get_patch("a4", 7, $Outer_content__input_tag__OR__Inn, ($scope) => $scope._._._, "a9", 1);
const $Outer_content__Inn = /*@__PURE__*/ _const(1, $Outer_content__input_tag__OR__Inn);
const $Outer_content__setup = ($scope) => {
	$Outer_content__input_tag($scope);
	$Outer_content__Inn($scope, { content: $Inn_content($scope) });
};
const $Outer_content = _content$1("a3", "<!><!><!>", "b%", $Outer_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content__input_tag__OR__Outer = /*@__PURE__*/ _or(2, ($scope) => $card_content__dynamicTag($scope, $scope._._.f, ($_) => ({ content: $scope.b })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a5", 7, $card_content__input_tag__OR__Outer, ($scope) => $scope._._, "a9", 0);
const $card_content__Outer = /*@__PURE__*/ _const(1, $card_content__input_tag__OR__Outer);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__Outer($scope, { content: $Outer_content($scope) });
};
const $card_content = _content$1("a6", "<!><!><!>", "b%", $card_content__setup);
