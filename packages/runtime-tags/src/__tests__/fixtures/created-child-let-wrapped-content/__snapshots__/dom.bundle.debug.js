// tags/outer.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_content = /*@__PURE__*/ _closure_get("input_content/4", ($scope) => $card_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/outer.marko_1_input_content#0:3/subscribe");
const $card_content__setup = $card_content__input_content;
const $card_content = /*@__PURE__*/ _content("__tests__/tags/outer.marko_1*content", "<b><!></b>", "D%", $card_content__setup);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"], $card_content($scope));
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($card_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
