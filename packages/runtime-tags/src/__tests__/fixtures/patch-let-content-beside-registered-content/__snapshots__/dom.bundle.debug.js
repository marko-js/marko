// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_open = ($scope, input_open) => $input_open$1($scope["#childScope/0"], input_open);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$2 = "<button class=clear>clear</button><!><!>";
const $walks$2 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content$1 = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$2 = $setup__script;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/toggle.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/toggle.marko_1_input_content#0:4/setup", "#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open$1 = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_open$1($scope, input.open);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var toggle_default = /*@__PURE__*/ _template("__tests__/tags/toggle.marko", $template$1, "b%c", 0, $input$1);

// tags/owner.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$2, "b%c");
const $toggle_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/owner.marko_2_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/owner.marko_0_input_label#4/subscribers", 1);
const $toggle_content__setup = $toggle_content__input_label;
const $toggle_content = _content_resume("__tests__/tags/owner.marko_2*content", "<i>guarded <!></i>", "Db%", $toggle_content__setup);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/owner.marko_1_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/owner.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content_resume("__tests__/tags/owner.marko_1*content", "<b>held <!></b>", "Db%", $card_content__setup);
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"], $card_content($scope));
	$input_content($scope["#childScope/1"], $toggle_content($scope));
}
const $input_open = ($scope, input_open) => $input_open$1($scope["#childScope/1"], input_open);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_open($scope, input.open);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label, $toggle_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var owner_default = /*@__PURE__*/ _template("__tests__/tags/owner.marko", $template, $walks, $setup, $input);
