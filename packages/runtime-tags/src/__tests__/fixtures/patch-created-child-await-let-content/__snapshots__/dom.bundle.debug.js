// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $card_content__setup = $card_content__input_label;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $await_content__c = /*@__PURE__*/ _let("c/2", ($scope) => $await_content__dynamicTag($scope, $scope.c));
const $await_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_content#0:3/init", /*@__PURE__*/ _closure_get("input_content/4", ($scope) => $await_content__c($scope, $scope._.input_content), 0, "__tests__/tags/card.marko_1_input_content#0:3/subscribe"));
const $await_content__setup__script = _script("__tests__/tags/card.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__c($scope, undefined);
}));
const $await_content__setup = ($scope) => {
	$await_content__input_content($scope);
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button>clear</button><!><!>", " b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("v", 1));
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($await_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, "b%c", $setup, $input);
