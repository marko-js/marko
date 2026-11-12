// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Inner_content__n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_5_n#2:4/subscribe", "n/9", ($scope) => _text($scope["#text/1"], $scope._.n), 0, "__tests__/template.marko_2_n#4/subscribers", 2);
const $Inner_content__setup__script = _script("__tests__/template.marko_5", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log("tree", $scope._.n, $scope._.label);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__n($scope);
	$Inner_content__label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_5_label#2:5/subscribe", "label/10", ($scope) => _text($scope["#text/2"], $scope._.label), 0, "__tests__/template.marko_2_label#5/subscribers", 1);
const $Inner_content = _content("__tests__/template.marko_5*content", "<b><!><!></b>", " D%b%", $Inner_content__setup);
const $if_content2__n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_n#2:4/subscribe", "n/9", ($scope) => $Tree_content__tag_input_n($scope["#childScope/0"], $scope._._.n - 1), ($scope) => $scope._._);
const $if_content2__setup = ($scope) => {
	$if_content2__n($scope);
	$if_content2__label($scope);
	$if_content2__tag($scope);
	$Tree_content__setup($scope["#childScope/0"]);
};
const $if_content2__label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_label#2:5/subscribe", "label/10", ($scope) => $Tree_content__tag_input_label($scope["#childScope/0"], $scope._._.label), ($scope) => $scope._._);
const $if_content2__tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_tag#2:6/subscribe", "tag/11", ($scope) => $Tree_content__tag_input_tag($scope["#childScope/0"], $scope._._.tag), ($scope) => $scope._._);
const $card_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks), $if_content2__setup);
const $card_content__n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_n#2:4/subscribe", "n/9", ($scope) => $card_content__if($scope, $scope._.n ? 0 : 1));
const $card_content__setup = $card_content__n;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $card_content__setup);
const $Tree_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Tree_content__tag__OR__Inner = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_tag#6_Inner#7/setup", 8, ($scope) => $Tree_content__dynamicTag($scope, $scope.tag, ($_) => ({ content: $scope.Inner })));
const $Tree_content__Inner = /*@__PURE__*/ _const("Inner", $Tree_content__tag__OR__Inner);
const $Tree_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
	$Tree_content__Inner($scope, { content: $Inner_content($scope) });
};
const $Tree_content__tag_input_n__closure = /*@__PURE__*/ _closure($card_content__n, $if_content2__n, $Inner_content__n);
const $Tree_content__tag_input_n = /*@__PURE__*/ _const("n", $Tree_content__tag_input_n__closure);
const $Tree_content__tag_input_label__closure = /*@__PURE__*/ _closure($if_content2__label, $Inner_content__label);
const $Tree_content__tag_input_label = /*@__PURE__*/ _const("label", $Tree_content__tag_input_label__closure);
const $Tree_content__tag_input_tag__closure = /*@__PURE__*/ _closure($if_content2__tag);
const $Tree_content__tag_input_tag = /*@__PURE__*/ _const("tag", ($scope) => {
	$Tree_content__tag_input_tag__closure($scope);
	$Tree_content__tag__OR__Inner($scope);
});
const $Tree_content__$params = ($scope, $params2) => $Tree_content__$temp($scope, $params2[0]);
const $Tree_content__$temp = ($scope, $temp) => {
	$Tree_content__tag_input_n($scope, $temp.n);
	$Tree_content__tag_input_label($scope, $temp.label);
	$Tree_content__tag_input_tag($scope, $temp.tag);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $Tree_content__tag_input_label($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__input_tag._($scope);
	$Tree_content__setup($scope["#childScope/0"]);
	$Tree_content__tag_input_n($scope["#childScope/0"], 1);
};
const $if_content__input_tag = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_tag#0:5/setup", "#text/0", 0, ($scope) => $Tree_content__tag_input_tag($scope["#childScope/0"], $scope._.input_tag));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
const $input_tag = /*@__PURE__*/ _const("input_tag", $if_content__input_tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
