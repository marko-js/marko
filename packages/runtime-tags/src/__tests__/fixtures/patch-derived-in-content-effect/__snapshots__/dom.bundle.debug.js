// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $wrapper_content__label__script = _script("__tests__/template.marko_1_label#1", ($scope) => _el_read($scope["#p/0"]).textContent = $scope.label);
const $wrapper_content__label = /*@__PURE__*/ _const("label", $wrapper_content__label__script);
const $wrapper_content__input_label = _closure_resume("__tests__/template.marko_1_input_label#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/4", ($scope) => $wrapper_content__label($scope, $scope._.input_label)), 0));
const $wrapper_content__setup = $wrapper_content__input_label;
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p></p>", " ", $wrapper_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
