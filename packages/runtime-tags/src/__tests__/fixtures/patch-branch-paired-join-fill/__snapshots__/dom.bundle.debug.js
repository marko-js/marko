// tags/panel.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $if_content__count__OR__a = /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill3", "a", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope.a + $scope._.count)));
const $if_content__a__OR__b = /*@__PURE__*/ _fill_join("| __tests__/tags/panel.marko_fill4", "b", /*@__PURE__*/ _fill_join("| __tests__/tags/panel.marko_fill3", "a", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_1_a#3_b#5/init", 7, ($scope) => _text($scope["#text/2"], $scope.a + $scope.b))));
const $if_content__a = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill3", "a", ($scope) => {
	$if_content__count__OR__a($scope);
	$if_content__a__OR__b($scope);
}, /*@__PURE__*/ _fill_mark("a", $if_content__count__OR__a));
const $if_content__input_x = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_x#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill0", "input_x", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__a($scope, $scope._.input_x + "a"))));
const $if_content__setup = ($scope) => {
	$if_content__input_x._($scope);
	$if_content__input_y._($scope);
	$if_content__count._($scope);
};
const $if_content__count__OR__b = /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill4", "b", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.b + $scope._.count)));
const $if_content__b = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill4", "b", ($scope) => {
	$if_content__count__OR__b($scope);
	$if_content__a__OR__b($scope);
}, /*@__PURE__*/ _fill_mark("b", $if_content__count__OR__b));
const $if_content__input_y = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_y#0:6/init", /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill1", "input_y", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__b($scope, $scope._.input_y + "b"))));
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_count#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__count__OR__a($scope);
	$if_content__count__OR__b($scope);
}));
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_fill2", "count/7", $if_content__count);
const $setup__script$1 = _script("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><p> </p><em> </em>", "D lD lD ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_x$1($scope, input.x);
	$input_y($scope, input.y);
};
const $input_x$1 = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_x", $if_content__input_x);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill1", "input_y", $if_content__input_y);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>y</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $y = _let("y/7", ($scope) => {
	$input_y($scope["#childScope/0"], $scope.y);
	$input_x$1($scope["#childScope/1"], $scope.y);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$y($scope, $scope.y + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$y($scope, "y0");
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => {
	$input_x$1($scope["#childScope/0"], input_x);
	$input_y($scope["#childScope/1"], input_x);
};
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/0"], input_show);
	$input_show$1($scope["#childScope/1"], input_show);
};
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
