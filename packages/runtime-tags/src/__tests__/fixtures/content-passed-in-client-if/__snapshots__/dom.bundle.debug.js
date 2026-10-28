// tags/inner.marko
const $template$2 = "<p><!></p>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$2, "D%l", 0, $input$2);

// tags/card.marko
const $template$1 = "<button class=add>add</button><!><!>";
const $walks$1 = " b%c";
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_content$1($scope["#childScope/0"], $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup$1($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $card_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $card_content__setup = $card_content__input_label;
const $card_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
