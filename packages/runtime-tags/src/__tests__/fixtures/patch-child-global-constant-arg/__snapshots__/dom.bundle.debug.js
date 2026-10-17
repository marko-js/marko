// tags/label-text.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_v = ($scope, input_v) => _text($scope["#text/0"], input_v);
const $input$1 = ($scope, input) => $input_v($scope, input.v);
var label_text_default = /*@__PURE__*/ _template("__tests__/tags/label-text.marko", $template$2, "D l", 0, $input$1);

// tags/pass.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = ($_) => {};
const $input_x__$global_suffix = /*@__PURE__*/ _fill_global_join("suffix", "__tests__/tags/pass.marko_0_input_x#3_$global_suffix#5", ($scope) => $input_v($scope["#childScope/0"], $scope.input_x + _global_read($scope.$global, "suffix")));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__$global_suffix);
const $input = ($scope, input) => $input_x($scope, input.x);
var pass_default = /*@__PURE__*/ _template("__tests__/tags/pass.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks$1);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/3", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_x($scope["#childScope/0"], "a");
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
