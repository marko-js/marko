// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag__OR__input_c = /*@__PURE__*/ _fill("__tests__/tags/one.marko_fill1", "input_c", /*@__PURE__*/ _fill("__tests__/tags/one.marko_fill0", "input_tag", /*@__PURE__*/ _or_resume("__tests__/tags/one.marko_0_input_tag#3_input_c#4/init", 5, ($scope) => $dynamicTag($scope, $scope.input_tag, ($_) => ({ class: $scope.input_c })))));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_c);
const $input_c = /*@__PURE__*/ _const("input_c", $input_tag__OR__input_c);
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_c($scope, input.c);
};
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_tag($scope["#childScope/0"], "div");
}
const $input_y = ($scope, input_y) => $input_c($scope["#childScope/0"], input_y);
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
