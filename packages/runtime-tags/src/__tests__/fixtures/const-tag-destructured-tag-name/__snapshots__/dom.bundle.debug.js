// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b");

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Layout_content = _content("__tests__/template.marko_1*content", "no layout");
const $pattern2 = ($scope, $pattern) => $Layout($scope, $pattern.layout);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $Layout_content);
const $Layout = $dynamicTag;
function $setup($scope) {
	$pattern2($scope, child_default);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
