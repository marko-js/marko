// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content2__input_n = /*@__PURE__*/ _shell_init("__tests__/tags/panel.marko_2_input_n#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/panel.marko_fill0", "input_n", /*@__PURE__*/ _closure_get("input_n/6", ($scope) => _text($scope["#text/0"], $scope._._.input_n), ($scope) => $scope._._, "__tests__/tags/panel.marko_2_input_n#0:4/subscribe"), 0));
const $if_content2__setup = $if_content2__input_n;
const $if_content__if = /*@__PURE__*/ _if("#div/1", "<em> </em>", "D ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _shell_init("__tests__/tags/panel.marko_1_input_show#0:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1)));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__input_n._($scope);
};
const $if_content__input_n = /*@__PURE__*/ _shell_init("__tests__/tags/panel.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_n))));
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><div></div>", "D l ", $if_content__setup);
const $input_show$1 = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$if_content__input_show($scope);
});
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_n($scope, input.n);
};
const $input_n__closure = /*@__PURE__*/ _closure($if_content2__input_n);
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_n", ($scope) => {
	$if_content__input_n($scope);
	$input_n__closure($scope);
});
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $input_x__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _or(7, ($scope) => $input_n($scope["#childScope/0"], $scope.count + $scope.input_x)));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/6", $input_x__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $input_x__OR__count);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
