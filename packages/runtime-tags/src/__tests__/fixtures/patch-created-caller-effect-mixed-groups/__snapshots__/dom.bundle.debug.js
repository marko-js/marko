// tags/probe.marko
const $template$1 = "<p>probe</p>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
const $input_label__OR__input_count__script = _script("__tests__/tags/probe.marko_0_input_label#2_input_count#3", ($scope) => console.log("probe", $scope.input_label, $scope.input_count));
const $input_label__OR__input_count = /*@__PURE__*/ _shell_or("__tests__/tags/probe.marko_0_input_label#2_input_count#3/init", 4, $input_label__OR__input_count__script);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__input_count);
const $input_count = /*@__PURE__*/ _const("input_count", $input_label__OR__input_count);
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_count($scope, input.count);
};
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template$1, "b", 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _shell_init("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_count($scope["#childScope/0"], $scope._.count)));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
