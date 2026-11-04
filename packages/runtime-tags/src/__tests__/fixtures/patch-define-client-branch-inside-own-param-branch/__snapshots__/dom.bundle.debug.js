// tags/child.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content2__input_on = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_3_input_on#0:3/subscribe", "input_on/5", ($scope) => _text($scope["#text/0"], $scope._._._.input_on), ($scope) => $scope._._._, "__tests__/tags/child.marko_0_input_on#3/subscribers", 0);
const $if_content2__setup = $if_content2__input_on;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $D_content__x = ($scope, x) => $D_content__if($scope, x ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__x($scope, $temp.x);
const $if_content__input_y = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_1_input_y#0:4/setup", "#text/0", 0, ($scope) => $D_content__x($scope["#childScope/0"], $scope._.input_y));
const $if_content__setup = ($scope) => {
	$if_content__input_y._($scope);
	$scope["#childScope/0"]._ = $scope;
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $input_on__closure = /*@__PURE__*/ _closure($if_content2__input_on);
const $input_on$1 = /*@__PURE__*/ _const("input_on", ($scope) => {
	$input_on__closure($scope);
	$if($scope, $scope.input_on ? 0 : 1);
});
const $input$1 = ($scope, input) => {
	$input_on$1($scope, input.on);
	$input_y($scope, input.y);
};
const $input_y = /*@__PURE__*/ _const("input_y", $if_content__input_y);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $y = _let("y/5", ($scope) => $input_y($scope["#childScope/1"], $scope.y));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, !$scope.y);
}));
function $setup($scope) {
	$y($scope, true);
	$setup__script($scope);
}
const $input_on = ($scope, input_on) => $input_on$1($scope["#childScope/1"], input_on);
const $input = ($scope, input) => $input_on($scope, input.on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
