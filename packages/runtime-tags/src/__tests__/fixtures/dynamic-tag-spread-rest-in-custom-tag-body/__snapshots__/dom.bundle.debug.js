// tags/wrapper/index.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $wrapper_content__input_button_label = /*@__PURE__*/ _closure_get("label", ($scope) => _text($scope["#text/1"], $scope._.label));
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_button_label($scope);
	$wrapper_content__rest($scope);
};
const $wrapper_content__rest__script = _script("__tests__/template.marko_1_rest#5", ($scope) => _attrs_script($scope, "#button/0"));
const $wrapper_content__rest = /*@__PURE__*/ _closure_get("rest", ($scope) => {
	_attrs($scope, "#button/0", $scope._.rest);
	$wrapper_content__rest__script($scope);
});
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button> </button>", " D ", $wrapper_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
}
const $input = ($scope, input) => $button($scope, input.button);
const $button = ($scope, button) => {
	(({ label, ...rest }) => $rest($scope, rest))(button || {});
	$label($scope, button?.label);
};
const $rest__closure = /*@__PURE__*/ _closure($wrapper_content__rest);
const $rest = /*@__PURE__*/ _const("rest", $rest__closure);
const $label__closure = /*@__PURE__*/ _closure($wrapper_content__input_button_label);
const $label = /*@__PURE__*/ _const("label", $label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
