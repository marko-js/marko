// tags/child-tag/index.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_footer_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_footer = $dynamicTag;
const $input$1 = ($scope, input) => $input_footer($scope, input.footer);
var child_tag_default = /*@__PURE__*/ _template("__tests__/tags/child-tag/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $footer_content__input_submitLabel = /*@__PURE__*/ _closure_get("input_submitLabel", ($scope) => _text($scope["#text/0"], $scope._.input_submitLabel || "OK"));
const $footer_content__setup = ($scope) => {
	$footer_content__input_submitLabel($scope);
	$footer_content__input_label($scope);
};
const $footer_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/1"], $scope._.input_label));
const $footer_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button> </button><span> </span>", "D lD ", $footer_content__setup);
const $open = /*@__PURE__*/ _let_change("open/8");
const $input_open__OR__input_openChange = /*@__PURE__*/ _or(5, ($scope) => $open($scope, $scope.input_open, $scope.input_openChange));
const $input_open = /*@__PURE__*/ _const("input_open", $input_open__OR__input_openChange);
const $input_openChange = /*@__PURE__*/ _const("input_openChange", $input_open__OR__input_openChange);
function $setup($scope) {
	$input_footer($scope["#childScope/0"], attrTag({ content: $footer_content($scope) }));
}
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_openChange($scope, input.openChange);
	$input_submitLabel($scope, input.submitLabel);
	$input_label($scope, input.label);
};
const $input_submitLabel__closure = /*@__PURE__*/ _closure($footer_content__input_submitLabel);
const $input_submitLabel = /*@__PURE__*/ _const("input_submitLabel", $input_submitLabel__closure);
const $input_label__closure = /*@__PURE__*/ _closure($footer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
