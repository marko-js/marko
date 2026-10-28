// tags/label.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_onHide = ($scope, input_onHide) => _text($scope["#text/0"], typeof input_onHide);
const $input$1 = ($scope, input) => $input_onHide($scope, input.onHide);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l b`)("D l");
const $input_w__OR__x = /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/1"], $scope.x + $scope.input_w));
const $x = /*@__PURE__*/ _let("x/7", $input_w__OR__x);
const $input_v = $x;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$x($scope, $scope.x + "!");
}));
function $setup($scope) {
	$input_onHide($scope["#childScope/0"], function() {
		$x($scope, "z");
	});
	$setup__script($scope);
}
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__OR__x);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
