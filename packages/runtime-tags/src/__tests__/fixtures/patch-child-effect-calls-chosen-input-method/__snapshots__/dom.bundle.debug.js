// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input__script = _script_patch("__tests__/tags/label.marko_0_input#1 input", ($scope) => console.log("run", $scope.input.get()));
const $input$1 = /*@__PURE__*/ _const("input", $input__script);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input$1);

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $input_upper__OR__up__OR__low = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_upper#4_up#5_low#6/setup", 7, ($scope) => $input$1($scope["#childScope/0"], { get: $scope.input_upper ? $scope.up : $scope.low }), 2);
const $up2 = /*@__PURE__*/ _const("up", $input_upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", $input_upper__OR__up__OR__low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input_upper = /*@__PURE__*/ _const("input_upper", $input_upper__OR__up__OR__low);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_upper($scope, input.upper);
};
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/up input_title", $up);
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
