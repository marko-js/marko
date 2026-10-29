// tags/panel.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = ($_) => {};
const $if_content2__input_b = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_2_input_b#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/panel.marko_fill0", "input_b", /*@__PURE__*/ _closure_get("input_b/9", ($scope) => _text($scope["#text/0"], $scope._._.input_b), ($scope) => $scope._._, "__tests__/tags/panel.marko_2_input_b#0:5/subscribe"), 0));
const $if_content2__setup = $if_content2__input_b;
const $if_content__if = /*@__PURE__*/ _if("#div/0", "<em> </em>", "D ", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_show#0:4/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1)));
const $if_content__setup = $if_content__input_show;
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $input_show$1 = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$if_content__input_show($scope);
});
const $input_b__OR__input_a = /*@__PURE__*/ _fill_join("| __tests__/tags/panel.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_0_input_b#5_input_a#6/init", 7, ($scope) => _text($scope["#text/1"], $scope.input_a + ":" + $scope.input_b)));
const $input_b__closure = /*@__PURE__*/ _closure($if_content2__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_b", ($scope) => {
	$input_b__closure($scope);
	$input_b__OR__input_a($scope);
}, /*@__PURE__*/ _fill_mark("input_b", $input_b__closure));
const $input_a = /*@__PURE__*/ _const("input_a", $input_b__OR__input_a);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_b($scope, input.b);
	$input_a($scope, input.a);
};
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $count = _let("count/6", ($scope) => $input_a($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $input_b($scope["#childScope/0"], input_x);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
