// template.marko
const $template = "<p> </p><p> </p>";
const $walks = "D lD l";
const $setup = ($_) => {};
const $input_b__OR__x = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_b", /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.x + $scope.input_b)));
const $x = _let("x/6", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$input_b__OR__x($scope);
});
const $input_a = $x;
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__OR__x);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
