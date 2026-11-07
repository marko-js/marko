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
const $input_x__OR__$global_suffix = /*@__PURE__*/ _or_patch("__tests__/tags/pass.marko_0_input_x#3_$global_suffix#5/setup", 4, ($scope) => $input_v($scope["#childScope/0"], $scope.input_x + _global_read($scope.$global, "suffix")));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__$global_suffix);
const $global_suffix = _fill_global_resume("__tests__/tags/pass.marko_0_$global_suffix#5/subscribe", $input_x__OR__$global_suffix, "suffix");
const $setup$1 = $global_suffix;
const $input = ($scope, input) => $input_x($scope, input.x);
var pass_default = /*@__PURE__*/ _template("__tests__/tags/pass.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks$1);
const $count = _let("count/3", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_x($scope["#childScope/0"], "a");
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
