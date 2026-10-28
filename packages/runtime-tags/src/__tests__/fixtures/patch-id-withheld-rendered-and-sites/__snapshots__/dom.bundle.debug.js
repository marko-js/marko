// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $outer_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $outer_content__setup);
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
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/inner.marko
const $template$2 = "<p><!></p>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$2 = $dynamicTag$1;
const $input$2 = ($scope, input) => $input_content$2($scope, input.content);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$2, "D%l", 0, $input$2);

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<button>clear</button><!>${_w0}${_w1}`)($template$2, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => ` b%b/${_w0}&/${_w1}&`)("D%l", "D%l");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/7", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content$1 = ($scope, input_content) => {
	$c($scope, input_content);
	$input_content$2($scope["#childScope/2"], input_content);
	$input_content$2($scope["#childScope/3"], input_content);
};
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $o = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "o/5", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o));
const $input_content = $o;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, undefined);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
