// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_w__OR__y = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.y + $scope.input_w));
const $y = /*@__PURE__*/ _let("y/5", $input_w__OR__y);
const $input_v$1 = $y;
const $input_w$1 = /*@__PURE__*/ _const("input_w", $input_w__OR__y);
const $input$1 = ($scope, input) => {
	$input_v$1($scope, input.v);
	$input_w$1($scope, input.w);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = ($_) => {};
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/0"], input_v);
const $input_w = ($scope, input_w) => $input_w$1($scope["#childScope/0"], input_w);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
