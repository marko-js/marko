// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
const $setup$2 = () => {};
const $input_a$2 = /*@__PURE__*/ _const("input_a", ($scope) => _return($scope, $scope.input_a + "!"));
const $input$2 = ($scope, input) => $input_a$2($scope, input.a);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$2, "b", 0, $input$2);

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
const $setup$1 = () => {};
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => _return($scope, $scope.input_a + "?"));
const $input$1 = ($scope, input) => $input_a$1($scope, input.a);
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", $template$1, "b", 0, $input$1);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1bD l";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $x);
const $x = _var_resume("__tests__/template.marko_0_x#8/var", ($scope, x) => _text($scope["#text/2"], x));
const $input_which__OR__input_a = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_which ? one_default : two_default, () => ({ a: $scope.input_a })));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_which__OR__input_a);
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_a($scope, input.a);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
