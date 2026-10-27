// tags/label.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $get__script = _script("__tests__/tags/label.marko_0_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get = /*@__PURE__*/ _const("get", $get__script);
const $input$2 = ($scope, input) => $get($scope, input.get);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$2, " b", 0, $input$2);

// tags/mid.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = ($_) => {};
const $input_get = ($scope, input_get) => $get($scope["#childScope/0"], input_get);
const $input$1 = ($scope, input) => $input_get($scope, input.get);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = ($_) => {};
const $input_upper__OR__up__OR__low = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "low", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "up", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_upper", /*@__PURE__*/ _or(7, ($scope) => $input_get($scope["#childScope/0"], $scope.input_upper ? $scope.up : $scope.low), 2))));
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
