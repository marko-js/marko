// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content3__input_b__OR__input_a = /*@__PURE__*/ _fill_if("__tests__/tags/panel.marko_fill1/unpatched", "input_a", /*@__PURE__*/ _fill_if("__tests__/tags/panel.marko_fill0/unpatched | __tests__/tags/panel.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_3_input_b#0:4_input_a#0:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._._.input_a + ":" + $scope._._.input_b)), "#text/0", 0, "#span/1", 0), "#text/0", 0, "#span/1", 0);
const $if_content3__input_b = /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_b/7", $if_content3__input_b__OR__input_a, ($scope) => $scope._._, "__tests__/tags/panel.marko_3_input_b#0:4/subscribe"));
const $if_content3__setup = ($scope) => {
	$if_content3__input_b($scope);
	$if_content3__input_a($scope);
};
const $if_content3__input_a = /*@__PURE__*/ _closure_get("input_a/8", $if_content3__input_b__OR__input_a, ($scope) => $scope._._, "__tests__/tags/panel.marko_3_input_a#0:5/subscribe");
const $if_content2__input_b = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_2_input_b#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/tags/panel.marko_fill0 __tests__/tags/panel.marko_fill0/unpatched", "input_b", /*@__PURE__*/ _closure_get("input_b/7", ($scope) => _text($scope["#text/0"], $scope._._.input_b), ($scope) => $scope._._, "__tests__/tags/panel.marko_2_input_b#0:4/subscribe"), 0));
const $if_content2__setup = $if_content2__input_b;
const $if_content__if = /*@__PURE__*/ _if("#div/0", "<em> </em>", "D ", $if_content2__setup);
const $if_content__if2 = /*@__PURE__*/ _if("#span/1", "<i> </i>", "D ", $if_content3__setup);
const $if_content__input_show = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_show#0:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__if($scope, $scope._.input_show ? 0 : 1);
	$if_content__if2($scope, $scope._.input_show ? 0 : 1);
}));
const $if_content__setup = $if_content__input_show;
const $if = /*@__PURE__*/ _if("#text/0", "<div></div><span></span>", " b ", $if_content__setup);
const $input_show$1 = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$if_content__input_show($scope);
});
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_b($scope, input.b);
	$input_a($scope, input.a);
};
const $input_b__closure = /*@__PURE__*/ _closure($if_content2__input_b, $if_content3__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_b", $input_b__closure);
const $input_a__closure = /*@__PURE__*/ _closure($if_content3__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
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
