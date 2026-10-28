// tags/show-value.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = ($_) => {};
const $joined = ($scope, joined) => $input_value($scope["#childScope/0"], joined);
const $input_w__OR__x = /*@__PURE__*/ _or(6, ($scope) => $joined($scope, $scope.x + $scope.input_w));
const $x = /*@__PURE__*/ _let("x/5", $input_w__OR__x);
const $input_v = $x;
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__OR__x);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
