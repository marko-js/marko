// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_slot_renderer__OR__input_label = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_slot_renderer, ($_) => ({ label: $scope.input_label })));
const $input_slot_renderer = /*@__PURE__*/ _const("input_slot_renderer", $input_slot_renderer__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_slot_renderer__OR__input_label);
const $input$1 = ($scope, input) => {
	$input_slot($scope, input.slot);
	$input_label$1($scope, input.label);
};
const $input_slot = ($scope, input_slot) => $input_slot_renderer($scope, input_slot?.renderer);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $B_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0].label);
const $B_content = _content_resume("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $B_content__$params);
const $A_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0].label);
const $A_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", 0, $A_content__$params);
const $input_a__OR__A__OR__B = /*@__PURE__*/ _or(7, ($scope) => $input_slot_renderer($scope["#childScope/0"], $scope.input_a ? $scope.A : $scope.B), 2);
const $A = /*@__PURE__*/ _const("A", $input_a__OR__A__OR__B);
const $B = /*@__PURE__*/ _const("B", $input_a__OR__A__OR__B);
function $setup($scope) {
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__A__OR__B);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_a($scope, input.a);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
