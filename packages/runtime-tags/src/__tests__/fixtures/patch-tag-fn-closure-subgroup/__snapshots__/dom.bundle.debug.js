// tags/code-block.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_d__OR__f = /*@__PURE__*/ _fill_join("__tests__/tags/code-block.marko_fill4", "f", /*@__PURE__*/ _fill_join("__tests__/tags/code-block.marko_fill3", "input_d", /*@__PURE__*/ _or_resume("__tests__/tags/code-block.marko_0_input_d#7_f#8/init", 9, ($scope) => _text($scope["#text/0"], $scope.f($scope.input_d)))));
const $f2 = /*@__PURE__*/ _const("f", $input_d__OR__f);
const $input_a__OR__input_b__OR__input_c = /*@__PURE__*/ _fill_join("__tests__/tags/code-block.marko_fill2", "input_c", /*@__PURE__*/ _fill_join("__tests__/tags/code-block.marko_fill1", "input_b", /*@__PURE__*/ _fill_join("__tests__/tags/code-block.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/code-block.marko_0_input_a#3_input_b#4_input_c#5/init", 6, ($scope) => $f2($scope, $f($scope)), 2))));
const $input_a$1 = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b__OR__input_c);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b__OR__input_c);
const $input_c$1 = /*@__PURE__*/ _const("input_c", $input_a__OR__input_b__OR__input_c);
const $input_d$1 = /*@__PURE__*/ _const("input_d", $input_d__OR__f);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b($scope, input.b);
	$input_c$1($scope, input.c);
	$input_d$1($scope, input.d);
};
const $f = ($scope) => function(t) {
	return t + $scope.input_a + $scope.input_b + $scope.input_c;
};
_bind_resume("__tests__/tags/code-block.marko_0/f input_a input_b input_c", $f);
var code_block_default = /*@__PURE__*/ _template("__tests__/tags/code-block.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D l");
const $b = /*@__PURE__*/ _let("b/7", ($scope) => $input_b($scope["#childScope/1"], $scope.b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$b($scope, $scope.b + "!");
}));
function $setup($scope) {
	$b($scope, "b");
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/1"], input_a);
const $input_c = ($scope, input_c) => $input_c$1($scope["#childScope/1"], input_c);
const $input_d = ($scope, input_d) => $input_d$1($scope["#childScope/1"], input_d);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_c($scope, input.c);
	$input_d($scope, input.d);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
