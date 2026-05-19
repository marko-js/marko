// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_resume_dynamic_tag();
const $tagName_content = _content_resume("__tests__/template.marko_1_content", "body content", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $tagName_content);
const $tagName = /* @__PURE__ */ _let("tagName/1", ($scope) => $dynamicTag($scope, $scope.tagName, () => ({
	class: "A",
	onClick: $onClick($scope)
})));
function $setup($scope) {
	$tagName($scope, "span");
}
function $onClick($scope) {
	return function() {
		$tagName($scope, $scope.tagName === "span" ? "div" : "span");
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
