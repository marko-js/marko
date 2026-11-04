// tags/card.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D%l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__o = /*@__PURE__*/ _let("o/2", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o));
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__o($scope, $scope._.input_content));
const $if_content__setup__script = _script("__tests__/tags/outer.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__o($scope, undefined);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_content._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D%l"), $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = _content("__tests__/template.marko_1*content", "<em>static <!></em>", "Db%", $outer_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $outer_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
