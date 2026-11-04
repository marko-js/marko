// tags/child.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content2__input_v = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_3_input_v#0:4/subscribe", "input_v/6", ($scope) => _text($scope["#text/0"], $scope._._._.input_v), ($scope) => $scope._._._, "__tests__/tags/child.marko_0_input_v#4/subscribers", 0);
const $if_content2__setup = $if_content2__input_v;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $if_content__input_on = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_1_input_on#0:5/setup", "#text/0", 0, ($scope) => $D_content__on($scope["#childScope/0"], $scope._.input_on));
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$scope["#childScope/0"]._ = $scope;
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_v$1($scope, input.v);
	$input_on($scope, input.on);
};
const $input_v__closure = /*@__PURE__*/ _closure($if_content2__input_v);
const $input_v$1 = /*@__PURE__*/ _const("input_v", $input_v__closure);
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
