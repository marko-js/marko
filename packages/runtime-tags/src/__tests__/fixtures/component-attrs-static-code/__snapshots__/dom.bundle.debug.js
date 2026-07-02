// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $input__OR__count = /* @__PURE__ */ _or(5, ($scope) => _text($scope["#text/1"], $scope.input.format($scope.count)));
const $count = /* @__PURE__ */ _let("count/4", $input__OR__count);
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = /* @__PURE__ */ _const("input", $input__OR__count);
var counter_default = /* @__PURE__ */ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1);
const formatNumber = $formatNumber;
const formatNumber2 = $formatNumber2;
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { format: formatNumber });
	$setup$1($scope["#childScope/1"]);
	$input($scope["#childScope/1"], { format: formatNumber2 });
}
function $formatNumber(n) {
	return "$" + n.toFixed(2);
}
function $formatNumber2(n) {
	return "$" + n.toFixed(2);
}
_resume("__tests__/template.marko_0/formatNumber", $formatNumber);
_resume("__tests__/template.marko_0/formatNumber2", $formatNumber2);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
