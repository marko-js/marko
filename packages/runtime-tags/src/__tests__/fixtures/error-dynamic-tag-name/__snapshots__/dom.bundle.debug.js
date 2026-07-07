// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const tagName = "hello world";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
function $setup($scope) {
	$dynamicTag($scope, tagName);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
