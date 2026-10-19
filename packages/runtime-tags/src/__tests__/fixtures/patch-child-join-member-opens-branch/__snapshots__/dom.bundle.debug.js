// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_b__OR__input_a = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1/unpatched", "input_a", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1", "input_a", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_1_input_b#0:3_input_a#0:4/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), "#text/0", 0), "#text/0", 0), "#text/0", 0);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_b__OR__input_a);
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__input_a._($scope);
};
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_b__OR__input_a);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_b = /*@__PURE__*/ _const("input_b", ($scope) => {
	$if($scope, $scope.input_b ? 0 : 1);
	$if_content__input_b($scope);
});
const $input$1 = ($scope, input) => {
	$input_b($scope, input.b);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c");
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/7", ($scope) => {
	$input_b($scope["#childScope/0"], $scope.n ? "s" + $scope.n : "");
	$input_a($scope["#childScope/1"], "c" + $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_x = ($scope, input_x) => $input_a($scope["#childScope/0"], input_x);
const $input_y = ($scope, input_y) => $input_b($scope["#childScope/1"], input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
