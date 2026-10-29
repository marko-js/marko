// tags/bold.marko
const $template$2 = "<b> </b>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var bold_default = /*@__PURE__*/ _template("__tests__/tags/bold.marko", $template$2, "D l", 0, $input$2);

// tags/italic.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var italic_default = /*@__PURE__*/ _template("__tests__/tags/italic.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $inputtag_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputtag_content__input_bold__OR__input_label = /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill0/unpatched", "input_bold", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_bold#0:4_input_label#0:5/init", 1, ($scope) => $inputtag_content__dynamicTag($scope, $scope._.input_bold ? bold_default : italic_default, ($_) => ({ label: $scope._.input_label }))), "input_bold/6", 0), "input_label/7", 0);
const $inputtag_content__input_bold = /*@__PURE__*/ _closure_get("input_bold/6", $inputtag_content__input_bold__OR__input_label, 0, "__tests__/template.marko_1_input_bold#0:4/subscribe");
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_bold($scope);
	$inputtag_content__input_label($scope);
};
const $inputtag_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", $inputtag_content__input_bold__OR__input_label, 0, "__tests__/template.marko_1_input_label#0:5/subscribe");
const $inputtag_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $inputtag_content__setup);
_content_resume($inputtag_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag = $dynamicTag;
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_bold($scope, input.bold);
	$input_label($scope, input.label);
};
const $input_bold__closure = /*@__PURE__*/ _closure($inputtag_content__input_bold);
const $input_bold = /*@__PURE__*/ _const("input_bold", $input_bold__closure);
const $input_label__closure = /*@__PURE__*/ _closure($inputtag_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
