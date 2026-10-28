// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $c__script = _script("__tests__/template.marko_0_c#8", ($scope) => console.log($scope.c));
const $c = /*@__PURE__*/ _const("c", $c__script);
const $a__OR__b = /*@__PURE__*/ _fill_signal("a __tests__/template.marko_fill0,b __tests__/template.marko_fill1", /*@__PURE__*/ _or(7, ($scope) => $c($scope, {
	a: $scope.a,
	b: $scope.b
})));
const $b = /*@__PURE__*/ _const("b", $a__OR__b);
const $input_x = ($scope, input_x) => {
	_text($scope["#text/0"], input_x);
	$b($scope, { x: input_x });
};
const $a = /*@__PURE__*/ _const("a", $a__OR__b);
const $input_y = ($scope, input_y) => $a($scope, { y: input_y });
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
