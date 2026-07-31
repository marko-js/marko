// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $else_content__input_variant = /*@__PURE__*/ _if_closure("#div/0", 1, ($scope) => _attr($scope["#h1/0"], "title", $scope._.input_variant));
const $else_content__setup = ($scope) => {
	$else_content__input_variant._($scope);
	$else_content__input_title._($scope);
};
const $else_content__input_title = /*@__PURE__*/ _if_closure("#div/0", 1, ($scope) => _text($scope["#text/1"], $scope._.input_title));
const $if = /*@__PURE__*/ _if("#div/0", "<strong>Something went wrong</strong>", 0, 0, "<h1> </h1>", " D ", $else_content__setup);
const $input_err = ($scope, input_err) => $if($scope, input_err ? 0 : 1);
const $input = ($scope, input) => {
	$input_err($scope, input.err);
	$input_variant($scope, input.variant);
	$input_title($scope, input.title);
};
const $input_variant = /*@__PURE__*/ _const("input_variant", $else_content__input_variant);
const $input_title = /*@__PURE__*/ _const("input_title", $else_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
