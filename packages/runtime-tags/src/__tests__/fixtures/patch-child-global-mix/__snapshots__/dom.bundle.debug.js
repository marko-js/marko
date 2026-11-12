// tags/gm-badge/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $global_flag_key = /*@__PURE__*/ _global_key("$global_flag/6", "flag");
const $global_flag = /*@__PURE__*/ _global_closure("__tests__/tags/gm-badge/index.marko_0_$global_flag#5/subscribe", $global_flag_key);
const $input_value__OR__$global_flag = /*@__PURE__*/ _global_or(4, ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")), $global_flag);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__$global_flag);
const $setup$1 = $global_flag;
const $input = ($scope, input) => $input_value($scope, input.value);
var gm_badge_default = /*@__PURE__*/ _template("__tests__/tags/gm-badge/index.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $count = _let("count/2", ($scope) => $input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
