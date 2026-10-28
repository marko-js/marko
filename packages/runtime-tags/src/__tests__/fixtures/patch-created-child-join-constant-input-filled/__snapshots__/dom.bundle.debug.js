// tags/child.marko
const $template$1 = "<p> </p><!><button class=t>t</button>";
const $walks$1 = "D l%b b";
const $if_content__input_b = /*@__PURE__*/ _fill_signal("input_b __tests__/tags/child.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_b)));
const $if_content__setup$1 = $if_content__input_b;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<i> </i>", "D ", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "open/8", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_b | __tests__/tags/child.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_a#5_input_b#6/init", 7, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b)));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", ($scope) => {
	$if_content__input_b($scope);
	$input_a__OR__input_b($scope);
}, /*@__PURE__*/ _fill_mark("input_b", $if_content__input_b));
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=n>+</button>";
const $walks = "b%b b";
const $if_content__input_y = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_y#0:5/init", /*@__PURE__*/ _fill_signal("input_y __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_a($scope["#childScope/1"], $scope._.input_y))));
const $if_content__setup = ($scope) => {
	$if_content__input_y._($scope);
	$if_content__n._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_a($scope["#childScope/0"], "x");
	$setup$1($scope["#childScope/1"]);
};
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$input_b($scope["#childScope/0"], $scope._.n);
	$input_b($scope["#childScope/1"], $scope._.n);
}));
const $n = /*@__PURE__*/ _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_y($scope, input.y);
};
const $input_y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_y", $if_content__input_y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
