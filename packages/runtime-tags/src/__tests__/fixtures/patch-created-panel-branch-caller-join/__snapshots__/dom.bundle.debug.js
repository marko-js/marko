// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("__tests__/tags/panel.marko_fill1 __tests__/tags/panel.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_if("__tests__/tags/panel.marko_fill0 __tests__/tags/panel.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_1_input_a#0:4_input_b#0:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + ":" + $scope._.input_b)), "#text/0", 0), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if_content__setup$1 = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if$1 = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup$1);
const $input_show$1 = ($scope, input_show) => $if$1($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $if_content__input_x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_x#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_b($scope["#childScope/0"], $scope._.input_x))));
const $if_content__setup = ($scope) => {
	$if_content__input_x._($scope);
	$if_content__input_show._($scope);
	$if_content__count._($scope);
};
const $if_content__input_show = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_show#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_show", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_show$1($scope["#childScope/0"], $scope._.input_show))));
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_a($scope["#childScope/0"], $scope._.count)));
const $count = /*@__PURE__*/ _let("count/7", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_outer = ($scope, input_outer) => $if($scope, input_outer ? 0 : 1);
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_x($scope, input.x);
	$input_show($scope, input.show);
};
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $if_content__input_x);
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_show", $if_content__input_show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
