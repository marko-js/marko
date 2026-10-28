// tags/panel.marko
const $template$1 = "<!><!><output> </output>";
const $walks$1 = "b%bD l";
const $if_content2__v = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_2_v#1:1/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.v)));
const $if_content2__setup__script = _script("__tests__/tags/panel.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope._._, $scope._.v);
}));
const $if_content2__setup = ($scope) => {
	$if_content2__v._($scope);
	$if_content2__setup__script($scope);
};
const $if_content__v = /*@__PURE__*/ _const("v", $if_content2__v);
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_a#0:5/init", /*@__PURE__*/ _fill_signal("input_a __tests__/tags/panel.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__v($scope, $scope._.input_a))));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_y._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<button class=read> </button>", " D ", $if_content2__setup);
const $if_content__input_y = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_y#0:6/init", /*@__PURE__*/ _fill_signal("input_y __tests__/tags/panel.marko_fill1", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_y ? 0 : 1))));
const $out = /*@__PURE__*/ _let("out/7", ($scope) => _text($scope["#text/1"], $scope.out));
function $setup$1($scope) {
	$out($scope, "");
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_x$1 = ($scope, input_x) => $if($scope, input_x ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_x$1($scope, input.x);
	$input_a$1($scope, input.a);
	$input_y($scope, input.y);
};
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_a", $if_content__input_a);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill1", "input_y", $if_content__input_y);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $y = /*@__PURE__*/ _let("y/6", ($scope) => $input_y($scope["#childScope/1"], $scope.y));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, !$scope.y);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$y($scope, true);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/1"], input_a);
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/1"], input_x);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
