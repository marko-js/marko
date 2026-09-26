// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $inputonsectionarticle_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#4/subscribe");
const $inputonsectionarticle_content__setup = $inputonsectionarticle_content__input_label;
const $inputonsectionarticle_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $inputonsectionarticle_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonsectionarticle_content);
const $input_on__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? "section" : "article", () => ({ class: $scope.input_label })));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_label);
const $input_label__closure = /*@__PURE__*/ _closure($inputonsectionarticle_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_on__OR__input_label($scope);
	$input_label__closure($scope);
});
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
