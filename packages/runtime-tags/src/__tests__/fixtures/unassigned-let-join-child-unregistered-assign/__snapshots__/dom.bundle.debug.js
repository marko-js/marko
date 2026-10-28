// tags/label.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_onHide = ($scope, input_onHide) => _text($scope["#text/0"], typeof input_onHide);
const $input$2 = ($scope, input) => $input_onHide($scope, input.onHide);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$2, "D l", 0, $input$2);

// tags/show-value.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l");
const $joined = ($scope, joined) => $input_value($scope["#childScope/1"], joined);
const $input_w__OR__x = /*@__PURE__*/ _or(7, ($scope) => $joined($scope, $scope.x + $scope.input_w));
const $x = /*@__PURE__*/ _let("x/6", $input_w__OR__x);
const $input_v = $x;
function $setup($scope) {
	$input_onHide($scope["#childScope/0"], function() {
		$x($scope, "z");
	});
}
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__OR__x);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
