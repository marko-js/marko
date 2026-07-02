// tags/cell/index.marko
const $template$2 = "<span class=cell> </span>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var cell_default = /* @__PURE__ */ _template("__tests__/tags/cell/index.marko", $template$2, "D l", $setup$2, $input$1);

// tags/row/index.marko
const $template$1 = /* @__PURE__ */ ((_w0, _w1) => `<div class=row>${_w0}${_w1}</div>`)($template$2, $template$2);
const $walks$1 = /* @__PURE__ */ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)("D l", "D l");
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => $input_value($scope["#childScope/0"], input_name);
const $input_quantity = ($scope, input_quantity) => $input_value($scope["#childScope/1"], input_quantity);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_quantity($scope, input.quantity);
};
var row_default = /* @__PURE__ */ _template("__tests__/tags/row/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button>add</button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)($walks$1);
const $quantity = /* @__PURE__ */ _let("quantity/2", ($scope) => $input_quantity($scope["#childScope/1"], $scope.quantity));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$quantity($scope, $scope.quantity + 1);
}));
function $setup($scope) {
	$input_name($scope["#childScope/1"], "Widget");
	$quantity($scope, 2);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
