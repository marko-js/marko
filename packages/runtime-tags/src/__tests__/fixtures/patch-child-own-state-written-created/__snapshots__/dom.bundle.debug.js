// tags/gm-badge/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $global_flag_key = /*@__PURE__*/ _global_key("$global_flag/6", "flag");
const $global_flag = /*@__PURE__*/ _global_closure("__tests__/tags/gm-badge/index.marko_0_$global_flag#5/subscribe", $global_flag_key);
const $input_value__OR__$global_flag = /*@__PURE__*/ _global_or(4, ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")), $global_flag);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__$global_flag);
const $setup$1 = $global_flag;
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var gm_badge_default = /*@__PURE__*/ _template("__tests__/tags/gm-badge/index.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $if_content__count = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_count#0:5/setup", "#text/0", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.count));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $count = _let("count/5", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
