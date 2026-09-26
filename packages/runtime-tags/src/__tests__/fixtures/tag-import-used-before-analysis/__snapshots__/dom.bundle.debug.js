// tags/wrap.marko
const $template$1 = "<div class=wrap><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $Wrap_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => _text($scope["#text/0"], $scope._.input_value), 0, "__tests__/template.marko_1_input_value#3/subscribe");
const $Wrap_content__setup = $Wrap_content__input_value;
const $Wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span> </span>", "D ", $Wrap_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Wrap_content($scope));
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value__closure = /*@__PURE__*/ _closure($Wrap_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
