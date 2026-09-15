// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_mode__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_mode === "a" ? card_a_default : card_b_default, () => ({ label: $scope.input_label })));
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_mode__OR__input_label);
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
