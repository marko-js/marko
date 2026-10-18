// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $f = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup$2 = $setup__script;
const $input$2 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _shell_init("__tests__/tags/wrapper.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/wrapper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_content", $if_content__input_content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $wrapper_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $input_fn($scope["#childScope/0"], $fn($scope)), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_label($scope);
	$setup$2($scope["#childScope/0"]);
};
const $wrapper_content = _content("__tests__/template.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $wrapper_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $wrapper_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $fn = ($scope) => function() {
	return "f:" + $scope._.input_label;
};
_resumed["__tests__/template.marko_1/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
