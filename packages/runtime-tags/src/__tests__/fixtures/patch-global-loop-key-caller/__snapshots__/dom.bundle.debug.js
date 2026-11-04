// tags/rows.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $for_content__setup__$global_x = /*@__PURE__*/ _fill_global_for("__tests__/tags/rows.marko_1_$global_x#0:8", "#ul/0", ($scope) => _text($scope["#text/0"], $scope["#LoopKey"] + ":" + $scope.$global.x), "x");
const $for_content__setup = $for_content__setup__$global_x;
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/0", "<li> </li>", "D ", $for_content__setup);
const $input_n = ($scope, input_n) => $for($scope, [input_n]);
const $input$1 = ($scope, input) => $input_n($scope, input.n);
var rows_default = /*@__PURE__*/ _template("__tests__/tags/rows.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>+</button>${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&`)(" b", " b");
const $n = _let("n/6", ($scope) => $input_n($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 2);
	$setup__script($scope);
}
const $input_m = ($scope, input_m) => $input_n($scope["#childScope/2"], input_m);
const $input = ($scope, input) => $input_m($scope, input.m);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
