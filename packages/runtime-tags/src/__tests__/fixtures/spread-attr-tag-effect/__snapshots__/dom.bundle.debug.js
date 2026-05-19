// tags/child.marko
const $template$2 = "<div></div>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $input_option__script = _script("__tests__/tags/child.marko_0_input_option", ($scope) => _el_read($scope["#div/0"]).innerHTML = Object.keys($scope.input_option).join(","));
const $input_option$1 = /* @__PURE__ */ _const("input_option", $input_option__script);
const $input$1 = ($scope, input) => $input_option$1($scope, input.option);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = $template$2;
const $walks$1 = /* @__PURE__ */ ((_w0) => `/${_w0}&`)(" b");
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $input_option = ($scope, input_option) => $input_option$1($scope["#childScope/0"], input_option);
const $input = ($scope, input) => $input_option($scope, input.option);
var wrap_default = /* @__PURE__ */ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $option_content = _content_resume("__tests__/template.marko_1_content", "1", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_option($scope["#childScope/0"], attrTag({ content: $option_content($scope) }));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
