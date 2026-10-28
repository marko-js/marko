// tags/gm-badge/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_value__$global_flag = /*@__PURE__*/ _fill_global_join("__tests__/tags/gm-badge/index.marko_0_input_value#3_$global_flag#5", ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")), "flag");
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__$global_flag);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var gm_badge_default = /*@__PURE__*/ _template("__tests__/tags/gm-badge/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.count)));
const $if_content__setup = $if_content__count;
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
