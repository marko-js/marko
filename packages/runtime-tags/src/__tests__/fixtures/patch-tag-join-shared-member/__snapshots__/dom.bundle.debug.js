// tags/rows.marko
const $template$1 = "<div> </div><div> </div>";
const $walks$1 = "D lD l";
const $setup$1 = ($_) => {};
const $input_a__OR__input_b__OR__input_c = /*@__PURE__*/ _or_resume("__tests__/tags/rows.marko_0_input_a#4_input_b#5_input_c#6/init", 7, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b + $scope.input_c), 2);
const $input_a__OR__input_d = /*@__PURE__*/ _or_resume("__tests__/tags/rows.marko_0_input_a#4_input_d#8/init", 9, ($scope) => _text($scope["#text/1"], $scope.input_a + $scope.input_d));
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__OR__input_b__OR__input_c($scope);
	$input_a__OR__input_d($scope);
});
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b__OR__input_c);
const $input_c$1 = /*@__PURE__*/ _const("input_c", $input_a__OR__input_b__OR__input_c);
const $input_d$1 = /*@__PURE__*/ _const("input_d", $input_a__OR__input_d);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b($scope, input.b);
	$input_c$1($scope, input.c);
	$input_d$1($scope, input.d);
};
var rows_default = /*@__PURE__*/ _template("__tests__/tags/rows.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>b</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
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
