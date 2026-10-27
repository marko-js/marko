// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
const $setup$2 = ($_) => {};
const $input_a$2 = /*@__PURE__*/ _const("input_a", ($scope) => _return($scope, $scope.input_a + "!"));
const $input$2 = ($scope, input) => $input_a$2($scope, input.a);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$2, "b", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => _return($scope, $scope.input_a + "?"));
const $input$1 = ($scope, input) => $input_a$1($scope, input.a);
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", $template$1, "b", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $if_content__x);
const $if_content__input_which__OR__input_a = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", "input_a", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_which", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_which#0:4_input_a#0:5/init", 3, ($scope) => $if_content__dynamicTag($scope, $scope._.input_which ? one_default : two_default, ($_) => ({ a: $scope._.input_a }))), "#main/0", 0), "#main/0", 0);
const $if_content__input_which = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_which__OR__input_a);
const $if_content__setup = ($scope) => {
	$if_content__input_which._($scope);
	$if_content__input_a._($scope);
};
const $if_content__input_a = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_which__OR__input_a);
const $if_content__x = _fill_var_resume("__tests__/template.marko_1_x#4/var", ($scope, x) => _text($scope["#text/2"], x));
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><p> </p>", "b1bD ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_which($scope, input.which);
	$input_a($scope, input.a);
};
const $input_which = /*@__PURE__*/ _const("input_which", $if_content__input_which);
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
