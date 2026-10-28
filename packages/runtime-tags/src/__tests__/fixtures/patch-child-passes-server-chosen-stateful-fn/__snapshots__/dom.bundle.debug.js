// tags/label-view.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $input__script = _script("__tests__/tags/label-view.marko_0_input#2", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.input.get();
	console.log("run", $scope.input.get());
});
const $input$2 = /*@__PURE__*/ _const("input", $input__script);
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$2, " b", 0, $input$2);

// tags/mid.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = ($_) => {};
const $input_get = ($scope, input_get) => $input$2($scope["#childScope/0"], { get: input_get });
const $input$1 = ($scope, input) => $input_get($scope, input.get);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $input_upper__OR__up__OR__low = /*@__PURE__*/ _fill_signal("input_upper __tests__/template.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_upper#5_up#8_low#9/init", 10, ($scope) => $input_get($scope["#childScope/0"], $scope.input_upper ? $scope.up : $scope.low), 2));
const $up2 = /*@__PURE__*/ _const("up", $input_upper__OR__up__OR__low);
const $input_title__OR__n = /*@__PURE__*/ _fill_signal("input_title __tests__/template.marko_fill0", /*@__PURE__*/ _or(7, ($scope) => $up2($scope, $up($scope))));
const $n = /*@__PURE__*/ _let("n/6", $input_title__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $low2 = /*@__PURE__*/ _const("low", $input_upper__OR__up__OR__low);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", ($scope) => {
	$low2($scope, $low($scope));
	$input_title__OR__n($scope);
});
const $input_upper = /*@__PURE__*/ _const("input_upper", $input_upper__OR__up__OR__low);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_upper($scope, input.upper);
};
const $up = ($scope) => () => "U" + $scope.input_title + $scope.n;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_0/up"] = $up;
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
