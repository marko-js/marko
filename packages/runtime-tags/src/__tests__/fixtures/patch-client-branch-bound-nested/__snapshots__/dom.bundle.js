// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));
const $setup = $setup__script;

// template.marko
const $Inner_content__outer = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => _text($scope.a, $scope._.b));
const $Inner_content = _content$1("a0", "<b> </b>", "D ", $Inner_content__outer);
const $Inner2_content__input_label = /*@__PURE__*/ _closure_get_patch("a3", 6, ($scope) => _text($scope.a, $scope._._._._.e), ($scope) => $scope._._._._, "a9", 1);
const $Inner2_content = _content$1("a2", "<i> </i>", "D ", $Inner2_content__input_label);
const $card_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content2__input_tag__OR__Inner = /*@__PURE__*/ _or(2, ($scope) => $card_content2__dynamicTag($scope, $scope._._._.f, ($_) => ({ content: $scope._.c })));
const $card_content2__dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1);
const $card_content2__input_tag__OR__Inner2 = /*@__PURE__*/ _or(4, ($scope) => $card_content2__dynamicTag2($scope, $scope._._._.f, ($_) => ({ content: $scope.d })));
const $card_content2__input_tag = /*@__PURE__*/ _closure_get_patch("a4", 7, ($scope) => {
	$card_content2__input_tag__OR__Inner($scope);
	$card_content2__input_tag__OR__Inner2($scope);
}, ($scope) => $scope._._._, "a10", 0);
const $card_content2__Inner2 = /*@__PURE__*/ _const(3, $card_content2__input_tag__OR__Inner2);
const $card_content2__setup = ($scope) => {
	$card_content2__input_tag($scope);
	$card_content2__Inner($scope);
	$card_content2__Inner2($scope, { content: $Inner2_content($scope) });
};
const $card_content2__Inner = /*@__PURE__*/ _closure_get(9, $card_content2__input_tag__OR__Inner);
const $card_content2 = _content$1("a5", "<!><!><!><!>", "b%b%", $card_content2__setup);
const $card_content__outer = /*@__PURE__*/ _const(1, /* @__PURE__ */ _closure($Inner_content__outer));
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a6", 6, ($scope) => $card_content__outer($scope, $scope._._.e + "!"), ($scope) => $scope._._, "a9", 0);
const $card_content__Inner = /*@__PURE__*/ _const(2);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup($scope.a);
	$input_content($scope.a, $card_content2($scope));
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content = _content$1("a7", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $card_content__setup);
