// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_label__OR__T__OR__v = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill2", "v", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:5_T#0:6_v#2/init", 3, ($scope) => $for_content__dynamicTag($scope, $scope._.T, ($_) => ({ label: $scope.v + $scope._.input_label })), 2));
const $for_content__input_label = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_label__OR__T__OR__v);
const $for_content__setup = ($scope) => {
	$for_content__input_label._($scope);
	$for_content__T._($scope);
};
const $for_content__T = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_T#0:6/init", /*@__PURE__*/ _for_closure("#text/0", $for_content__input_label__OR__T__OR__v));
const $for_content__v = /*@__PURE__*/ _const("v", $for_content__input_label__OR__T__OR__v);
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[0]);
const $T = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("T/6", $for_content__T));
const $input_fmt = $T;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_items$1($scope, input.items);
	$input_label$1($scope, input.label);
};
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $for_content__input_label));
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_fmt($scope["#childScope/0"], card_default);
}
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
