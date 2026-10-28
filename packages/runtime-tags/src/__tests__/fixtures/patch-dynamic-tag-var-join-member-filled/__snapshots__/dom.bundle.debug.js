// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
const $setup$2 = ($_) => {};
const $input_id$2 = /*@__PURE__*/ _const("input_id", ($scope) => _return($scope, `one ${$scope.input_id}`));
const $input$2 = ($scope, input) => $input_id$2($scope, input.id);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$2, "b", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
const $input_id$1 = /*@__PURE__*/ _const("input_id", ($scope) => _return($scope, `two ${$scope.input_id}`));
const $input$1 = ($scope, input) => $input_id$1($scope, input.id);
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", $template$1, "b", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><span> </span><!><!>";
const $walks = "b1bD l%c";
const $try_content__input_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_id#0:7/init", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_id/10", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_2_input_id#0:7/subscribe")));
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _closure_get("input_id/10", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_1_input_id#0:7/subscribe"), 0);
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_1*content", "loading <!>", "b%", $placeholder_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $v);
const $v = _fill_var_resume("__tests__/template.marko_0_v#9/var", ($scope, v) => _text($scope["#text/2"], v));
const $input_which__OR__input_id = /*@__PURE__*/ _fill("| __tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_which#6_input_id#7/init", 8, ($scope) => $dynamicTag($scope, $scope.input_which ? one_default : two_default, ($_) => ({ id: $scope.input_id }))));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_id);
const $input_id__closure = /*@__PURE__*/ _closure($placeholder_content__input_id, $try_content__input_id);
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_id", ($scope) => {
	$input_id__closure($scope);
	$input_which__OR__input_id($scope);
}, /*@__PURE__*/ _fill_mark("input_id", $input_id__closure));
const $try = /*@__PURE__*/ _try("#text/3", "<p> </p>", "D ", $try_content__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_id($scope, input.id);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
