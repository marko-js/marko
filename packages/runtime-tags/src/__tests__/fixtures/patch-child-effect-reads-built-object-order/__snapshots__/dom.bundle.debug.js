// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}`)("");
const $walks = /*@__PURE__*/ ((_w0) => `D /${_w0}&l`)("");
const $setup = ($_) => {};
const $c = ($scope, c) => $input_value($scope["#childScope/1"], c);
const $a__OR__b = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "b", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "a", /*@__PURE__*/ _or(8, ($scope) => $c($scope, {
	a: $scope.a,
	b: $scope.b
}))));
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $input_value__script = _script("__tests__/tags/child.marko_0_input_value#2", ($scope) => console.log($scope.input_value));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__script);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, $input);
