// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_label__OR__T = /*@__PURE__*/ _fill_join_if("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:5_T#0:6/init", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.T, ($_) => ({ label: $scope._.input_label }))), "#text/1", 0);
const $if_content__input_label$1 = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__T);
const $if_content__setup$1 = ($scope) => {
	$if_content__input_label$1._($scope);
	$if_content__T._($scope);
};
const $if_content__T = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__T);
const $T = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "T/6", $if_content__T);
const $input_tag = $T;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup$1 = $setup__script;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<section><!></section>", "D%", $if_content__setup$1);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_label", ($scope) => {
	$if_content__input_label$1($scope);
	$if$1($scope, $scope.input_label !== "x" ? 0 : 1);
}, $if_content__input_label$1);
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_tag($scope["#childScope/0"], card_default);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
