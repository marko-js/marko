// tags/outer.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = ($_) => {};
const $T = /*@__PURE__*/ _let("T/6", ($scope) => {
	$T_a($scope, $scope.T?.a);
	$T_b($scope, $scope.T?.b);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_label__OR__T_a = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.T_a, ($_) => ({ title: $scope.input_label })));
const $T_a = /*@__PURE__*/ _const("T_a", $input_label__OR__T_a);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__T_b = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag2($scope, $scope.T_b, ($_) => ({ title: $scope.input_label })));
const $T_b = /*@__PURE__*/ _const("T_b", $input_label__OR__T_b);
const $input_tag$1 = $T;
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__T_a($scope);
	$input_label__OR__T_b($scope);
});
const $input$1 = ($scope, input) => {
	$input_tag$1($scope, input.tag);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $setup = ($_) => {};
const $input_tag = ($scope, input_tag) => $input_tag$1($scope["#childScope/0"], {
	a: input_tag,
	b: input_tag
});
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
