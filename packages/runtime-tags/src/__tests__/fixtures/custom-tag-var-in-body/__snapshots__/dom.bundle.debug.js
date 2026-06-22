// tags/child.marko
const $template$1 = "<!><!><div></div>";
const $walks$1 = "b%b b";
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
function $setup$1($scope) {
	_return($scope, $_return($scope));
}
const $input = ($scope, input) => $input_content($scope, input.content);
function $_return($scope) {
	return () => (html) => _el_read($scope["#div/1"]).innerHTML = html;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b0${_w0}&`)($walks$1);
const $child_content__setHtml__script = _script("__tests__/template.marko_1_setHtml", ($scope) => _assert_init($scope._, "setHtml")("Hello world"));
const $child_content__setHtml = /* @__PURE__ */ _closure_get("setHtml", $child_content__setHtml__script);
const $child_content__setup = $child_content__setHtml;
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", 0, 0, $child_content__setup);
const $setHtml = /* @__PURE__ */ _const("setHtml");
function $setup($scope) {
	_var($scope, "#childScope/0", $setHtml);
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $child_content($scope));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
