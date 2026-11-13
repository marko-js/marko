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
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Tree_content__template = $template$1;
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_label#2:3/subscribe", "label/6", ($scope) => _text($scope["#text/0"], $scope._.label), 0, "__tests__/template.marko_2_label#3/subscribers", 0);
const $card_content__setup = $card_content__label;
const $card_content = _content("__tests__/template.marko_3*content", "<span> </span>", "D ", $card_content__setup);
const $Tree_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $Tree_content__tag_input_label__closure = /*@__PURE__*/ _closure($card_content__label);
const $Tree_content__tag_input_label = /*@__PURE__*/ _const("label", $Tree_content__tag_input_label__closure);
const $Tree_content__$params = ($scope, $params2) => $Tree_content__$temp($scope, $params2[0]);
const $Tree_content__$temp = ($scope, $temp) => $Tree_content__tag_input_label($scope, $temp.label);
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $Tree_content__tag_input_label($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Tree_content__setup($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $Tree_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Tree_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
