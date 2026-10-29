// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_a__OR__input_b = /*@__PURE__*/ _fill("__tests__/tags/child.marko_fill1", "input_b", /*@__PURE__*/ _fill("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_a#3_input_b#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b))));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><button class=n>+</button>";
const $walks = "b%b b";
const $if_content__input_y = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_y#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_y", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_a($scope["#childScope/1"], $scope._.input_y))));
const $if_content__setup = ($scope) => {
	$if_content__input_y._($scope);
	$if_content__n._($scope);
	$input_a($scope["#childScope/0"], "x");
};
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$input_b($scope["#childScope/0"], $scope._.n);
	$input_b($scope["#childScope/1"], $scope._.n);
}));
const $n = _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_y($scope, input.y);
};
const $input_y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_y", $if_content__input_y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
