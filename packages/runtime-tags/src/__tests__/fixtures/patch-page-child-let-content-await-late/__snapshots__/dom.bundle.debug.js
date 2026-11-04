// tags/card.marko
const $template$1 = "<div><!></div><!><!>";
const $walks$1 = "D%l%c";
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__c = /*@__PURE__*/ _closure_get_patch("__tests__/tags/card.marko_1_c#0:5/subscribe", "c/6", ($scope) => $await_content__dynamicTag($scope, $scope._.c));
const $await_content__setup = $await_content__c;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $c__closure = /*@__PURE__*/ _closure($await_content__c);
const $c = _fill_let_resume("__tests__/tags/card.marko_0_c#5/fill", "c/5", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$c__closure($scope);
});
const $input_content = $c;
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<section><!></section>", "D%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
function $setup$1($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("v", 1));
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content_resume("__tests__/template.marko_1*content", "<em>static <!></em>", "Db%", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
