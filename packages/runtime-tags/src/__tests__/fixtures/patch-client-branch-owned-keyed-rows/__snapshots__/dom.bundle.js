// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $inputtag_content__r_label = /*@__PURE__*/ _closure_get_patch("a6", 8, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a12", 2);
const $inputtag_content = _content$1("a5", " ", " ", $inputtag_content__r_label);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a3", 6, ($scope) => _text($scope.c, $scope._._._.e), ($scope) => $scope._._._, "a14", 0);
const $Inner_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._._.d, $scope._._._.e);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__r_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__r_label = /*@__PURE__*/ _closure_get_patch("a4", 8, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._, "a12", 1);
const $Inner_content = _content$1("a1", "<b><!><!></b>", " D%b%", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content__input_tag__OR__Inner = /*@__PURE__*/ _or_patch("a10", 4, ($scope) => $card_content__dynamicTag($scope, $scope._._.f, ($_) => ({ content: $scope.d })));
const $card_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1, $inputtag_content);
const $card_content__input_tag__OR__r_label = /*@__PURE__*/ _or_patch("a9", 2, ($scope) => $card_content__dynamicTag2($scope, $scope._._.f, ($_) => ({ onClick: $onClick($scope) })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a7", 7, ($scope) => {
	$card_content__input_tag__OR__Inner($scope);
	$card_content__input_tag__OR__r_label($scope);
}, ($scope) => $scope._._, "a15", 0);
const $card_content__Inner = /*@__PURE__*/ _const(3, $card_content__input_tag__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__r_label($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content__r_label = /*@__PURE__*/ _closure_get_patch("a8", 8, $card_content__input_tag__OR__r_label, 0, "a12", 0);
const $card_content = _content$1("a11", "<!><!><!><!>", "b%b%", $card_content__setup);
const $onClick = ($scope) => function() {
	console.log("direct", $scope._.d);
};
_bind_resume("a0 >d", $onClick);
