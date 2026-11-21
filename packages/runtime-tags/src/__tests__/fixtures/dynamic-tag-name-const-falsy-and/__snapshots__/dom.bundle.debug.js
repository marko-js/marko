// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $wrapsection_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span>content</span>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $wrapsection_content);
function $setup($scope) {
	$dynamicTag($scope, false && "section");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
