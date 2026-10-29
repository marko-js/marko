// tags/panel.marko
const $template$1 = "<!><!><output> </output>";
const $walks$1 = "b%bD l";
const $for_content__f = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_2_f#0:6/init", /*@__PURE__*/ _fill_closure("__tests__/tags/panel.marko_fill0", "f", /*@__PURE__*/ _closure_get("f/8", ($scope) => _text($scope["#text/1"], $scope._._.f()), ($scope) => $scope._._, "__tests__/tags/panel.marko_2_f#0:6/subscribe"), 0));
const $for_content__setup__script = _script("__tests__/tags/panel.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope._._, $scope._._.f());
}));
const $for_content__setup = ($scope) => {
	$for_content__f($scope);
	$for_content__setup__script($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button class=read> </button>", " D ", $for_content__setup);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1]]);
const $f2__closure = /*@__PURE__*/ _closure($for_content__f);
const $f2 = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "f", $f2__closure);
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => $f2($scope, $f($scope)));
const $out = _let("out/7", ($scope) => _text($scope["#text/1"], $scope.out));
function $setup$1($scope) {
	$out($scope, "");
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_y = ($scope, input_y) => $if($scope, input_y ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_y($scope, input.y);
};
const $f = ($scope) => function() {
	return $scope.input_a;
};
_bind_resume("__tests__/tags/panel.marko_0/f input_a", $f);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=toggle>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $y = _let("y/5", ($scope) => $input_y($scope["#childScope/1"], $scope.y));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, !$scope.y);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$y($scope, true);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/1"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
