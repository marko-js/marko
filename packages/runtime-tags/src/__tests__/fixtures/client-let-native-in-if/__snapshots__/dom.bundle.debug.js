// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $T_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/outer.marko_2_input_label#0:5/subscribe");
const $T_content__setup = $T_content__input_label;
const $T_content = _content("__tests__/tags/outer.marko_2*content", " ", " ", $T_content__setup);
_content_resume($T_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $T_content);
const $if_content__input_label__OR__T = /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.T, ($_) => ({ title: $scope._.input_label })));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__T);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__T._($scope);
};
const $if_content__T = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__T);
const $T = /*@__PURE__*/ _let("T/6");
const $input_tag$1 = $T;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_tag$1($scope, input.tag);
	$input_more$1($scope, input.more);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($T_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	$if_content__input_label($scope);
	$input_label__closure($scope);
});
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_tag = ($scope, input_tag) => $input_tag$1($scope["#childScope/0"], input_tag);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
