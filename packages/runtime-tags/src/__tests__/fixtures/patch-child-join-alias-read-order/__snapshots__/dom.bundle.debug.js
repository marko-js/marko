// tags/child.marko
const $template$1 = "<em> </em><p> </p><!><button class=t>t</button>";
const $walks$1 = "D lD l%b b";
const $if_content__input_a = /*@__PURE__*/ _fill("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a)));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/2", "<i> </i>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "open/8", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $input_b__OR__input_a = /*@__PURE__*/ _fill("| __tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_b#7_a#6/init", 9, ($scope) => _text($scope["#text/1"], $scope.input_a + $scope.input_b)));
const $input_a = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", ($scope) => {
	$if_content__input_a($scope);
	_text($scope["#text/0"], $scope.input_a);
	$input_b__OR__input_a($scope);
}, /*@__PURE__*/ _fill_mark("input_a", $if_content__input_a));
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__OR__input_a);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $n = _let("n/7", ($scope) => {
	$input_b($scope["#childScope/0"], "n" + $scope.n);
	$input_a($scope["#childScope/1"], "m" + $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $input_a($scope["#childScope/0"], input_x);
const $input_y = ($scope, input_y) => $input_b($scope["#childScope/1"], input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
