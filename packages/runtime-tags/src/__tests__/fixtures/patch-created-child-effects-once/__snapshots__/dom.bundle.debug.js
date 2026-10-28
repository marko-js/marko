// tags/child.marko
const $template$1 = "<span><!> <!></span>";
const $walks$1 = "D%c%l";
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => console.log("setup"));
const $setup$1 = $setup__script$1;
const $input_label__script = _script("__tests__/tags/child.marko_0_input_label#4", ($scope) => console.log("label", $scope.input_label));
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	$input_label__script($scope);
});
const $input_count__script = _script("__tests__/tags/child.marko_0_input_count#5", ($scope) => console.log("count", $scope.input_count));
const $input_count = /*@__PURE__*/ _const("input_count", ($scope) => {
	_text($scope["#text/1"], $scope.input_count);
	$input_count__script($scope);
});
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_count($scope, input.count);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_msg#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_msg", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_msg))));
const $if_content__setup = ($scope) => {
	$if_content__input_msg._($scope);
	$if_content__count._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_count($scope["#childScope/0"], $scope._.count)));
const $count = _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_msg($scope, input.msg);
};
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_msg", $if_content__input_msg);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
