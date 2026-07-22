// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = () => {};
const $input_a__OR__input_b = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.input_a ? "A" : $scope.input_b ? "B" : "C"));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
