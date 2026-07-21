// template.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
const $setup = () => {};
const $input_a__OR__input_b = /*@__PURE__*/ _or(6, /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.input_a + $scope.b)));
const $input_a__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], $scope.input_a));
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__render($scope);
	$input_a__OR__input_b($scope);
});
const $b = /*@__PURE__*/ _const("b", $input_a__OR__input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
