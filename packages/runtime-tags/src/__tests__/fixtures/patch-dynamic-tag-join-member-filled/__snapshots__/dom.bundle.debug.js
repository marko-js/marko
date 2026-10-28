// tags/one.marko
const $template$2 = "<i>one <!></i>";
const $walks$2 = "Db%l";
const $setup$2 = ($_) => {};
const $input_id$2 = ($scope, input_id) => _text($scope["#text/0"], input_id);
const $input$2 = ($scope, input) => $input_id$2($scope, input.id);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$2, $walks$2, 0, $input$2);

// tags/two.marko
const $template$1 = "<b>two <!></b>";
const $walks$1 = "Db%l";
const $setup$1 = ($_) => {};
const $input_id$1 = ($scope, input_id) => _text($scope["#text/0"], input_id);
const $input$1 = ($scope, input) => $input_id$1($scope, input.id);
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $try_content__input_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_id#0:5/init", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_2_input_id#0:5/subscribe")));
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _closure_get("input_id/7", ($scope) => _text($scope["#text/0"], $scope._.input_id), 0, "__tests__/template.marko_1_input_id#0:5/subscribe"), 0);
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_1*content", "loading <!>", "b%", $placeholder_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_which__OR__input_id = /*@__PURE__*/ _fill("| __tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_which#4_input_id#5/init", 6, ($scope) => $dynamicTag($scope, $scope.input_which ? one_default : two_default, ($_) => ({ id: $scope.input_id }))));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_id);
const $input_id__closure = /*@__PURE__*/ _closure($placeholder_content__input_id, $try_content__input_id);
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_id", ($scope) => {
	$input_id__closure($scope);
	$input_which__OR__input_id($scope);
}, /*@__PURE__*/ _fill_mark("input_id", $input_id__closure));
const $try = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_id($scope, input.id);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
