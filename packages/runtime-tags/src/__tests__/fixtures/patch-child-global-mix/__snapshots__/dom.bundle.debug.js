// tags/gm-badge/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value__$global_flag = /*@__PURE__*/ _fill_global_join("__tests__/tags/gm-badge/index.marko_0_input_value#3_$global_flag#5", ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")), "flag");
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__$global_flag);
const $input = ($scope, input) => $input_value($scope, input.value);
var gm_badge_default = /*@__PURE__*/ _template("__tests__/tags/gm-badge/index.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
