// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $input_on__OR__input_style = /*@__PURE__*/ _or(5, ($scope) => _attr_style($scope["#div/0"], $scope.input_on && $scope.input_style));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_style);
const $input_style = /*@__PURE__*/ _const("input_style", $input_on__OR__input_style);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_style($scope, input.style);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
