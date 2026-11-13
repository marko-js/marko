// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $input_content = $c;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));
const $setup = $setup__script;

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template);
const $Inner_content__n = /*@__PURE__*/ _closure_get_patch("a7", 9, ($scope) => _text($scope.b, $scope._.e), 0, "a10", 2);
const $Inner_content__setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	console.log("tree", $scope._.e, $scope._.f);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__n($scope);
	$Inner_content__label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__label = /*@__PURE__*/ _closure_get_patch("a8", 10, ($scope) => _text($scope.c, $scope._.f), 0, "a11", 1);
const $Inner_content = _content$1("a5", "<b><!><!></b>", " D%b%", $Inner_content__setup);
const $if_content2__n = /*@__PURE__*/ _closure_get_patch("a2", 9, ($scope) => $Tree_content__tag_input_n($scope.a, $scope._._.e - 1), ($scope) => $scope._._, "a10", 1);
const $if_content2__setup = ($scope) => {
	$if_content2__n($scope);
	$if_content2__label($scope);
	$if_content2__tag($scope);
	$Tree_content__setup($scope.a);
};
const $if_content2__label = /*@__PURE__*/ _closure_get_patch("a0", 10, ($scope) => $Tree_content__tag_input_label($scope.a, $scope._._.f), ($scope) => $scope._._, "a11", 0);
const $if_content2__tag = /*@__PURE__*/ _closure_get_patch("a1", 11, ($scope) => $Tree_content__tag_input_tag($scope.a, $scope._._.g), ($scope) => $scope._._, "a12", 0);
const $card_content__if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks), $if_content2__setup);
const $card_content__n = /*@__PURE__*/ _closure_get_patch("a3", 9, ($scope) => $card_content__if($scope, $scope._.e ? 0 : 1), 0, "a10", 0);
const $card_content = _content$1("a4", "<!><!><!>", "b%", $card_content__n);
const $Tree_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $Tree_content__tag__OR__Inner = /*@__PURE__*/ _or_patch("a13", 8, ($scope) => $Tree_content__dynamicTag($scope, $scope.g, ($_) => ({ content: $scope.h })));
const $Tree_content__Inner = /*@__PURE__*/ _const(7, $Tree_content__tag__OR__Inner);
const $Tree_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $card_content($scope));
	$Tree_content__Inner($scope, { content: $Inner_content($scope) });
};
const $Tree_content__tag_input_n = /*@__PURE__*/ _const(4, /* @__PURE__ */ _closure($card_content__n, $if_content2__n, $Inner_content__n));
const $Tree_content__tag_input_label = /*@__PURE__*/ _const(5, /* @__PURE__ */ _closure($if_content2__label, $Inner_content__label));
const $Tree_content__tag_input_tag__closure = /*@__PURE__*/ _closure($if_content2__tag);
const $Tree_content__tag_input_tag = /*@__PURE__*/ _const(6, ($scope) => {
	$Tree_content__tag_input_tag__closure($scope);
	$Tree_content__tag__OR__Inner($scope);
});
