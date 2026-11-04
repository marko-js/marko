// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content2__v = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_2_v#1:1/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.v));
const $if_content2__setup = $if_content2__v;
const $if_content__v = /*@__PURE__*/ _const("v", $if_content2__v);
const $if_content__input_v = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_1_input_v#0:4/setup", "#text/0", 0, ($scope) => $if_content__v($scope, `${$scope._.input_v}!`));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_on._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $if_content__input_on = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_1_input_on#0:5/setup", "#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_on ? 0 : 1));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_v$1($scope, input.v);
	$input_on($scope, input.on);
};
const $input_v$1 = /*@__PURE__*/ _const("input_v", $if_content__input_v);
const $input_on = /*@__PURE__*/ _const("input_on", $if_content__input_on);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $on = _let("on/6", ($scope) => $input_on($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/1"], input_v);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
