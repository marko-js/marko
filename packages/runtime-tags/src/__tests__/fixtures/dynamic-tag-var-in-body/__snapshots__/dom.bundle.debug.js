// tags/child.marko
const $template$1 = "<!><!><div></div>";
const $walks$1 = "b%b b";
const $dynamicTag$1 = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag$1($scope, input_content);
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
const $template = "<!><!><!>";
const $walks = "b1c";
const $Child_content__setHtml__script = _script("__tests__/template.marko_1_setHtml", ($scope) => _assert_init($scope._, "setHtml")("Hello World"));
const $Child_content__setHtml = /* @__PURE__ */ _closure_get("setHtml", $Child_content__setHtml__script);
const $Child_content__setup = $Child_content__setHtml;
const $Child_content = _content_resume("__tests__/template.marko_1_content", 0, 0, $Child_content__setup);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $Child_content, () => $setHtml);
const $setHtml__closure = /* @__PURE__ */ _closure($Child_content__setHtml);
const $setHtml = _var_resume("__tests__/template.marko_0_setHtml/var", /* @__PURE__ */ _const("setHtml", $setHtml__closure));
function $setup($scope) {
	$dynamicTag($scope, 1 && child_default);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b1c", $setup);
