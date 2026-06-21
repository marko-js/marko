// tags/echo.marko
const $template$2 = "<div class=echo><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content$1 = ($scope, input_content) => $dynamicTag($scope, input_content);
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var echo_default = /* @__PURE__ */ _template("__tests__/tags/echo.marko", $template$2, "D%l", $setup$2, $input$1);

// tags/my-box.marko
const $template$1 = /* @__PURE__ */ ((_w0) => `<div></div>${_w0}`)($template$2);
const $walks$1 = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)("D%l");
const $input__script = _script("__tests__/tags/my-box.marko_0_input", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$input_content($scope, $scope.input.content);
	$input__script($scope);
});
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/1"]);
}
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/1"], input_content);
var my_box_default = /* @__PURE__ */ _template("__tests__/tags/my-box.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $mybox_content = _content_resume("__tests__/template.marko_1_content", "Hello", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {
		class: "x",
		content: $mybox_content($scope)
	});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
