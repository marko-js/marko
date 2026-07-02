// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $tagName_content = _content_resume("__tests__/template.marko_1_content", "body content", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $tagName_content);
const $tagName__OR__className = /* @__PURE__ */ _or(4, ($scope) => $dynamicTag($scope, $scope.tagName, () => ({ class: $scope.className })));
const $tagName = /* @__PURE__ */ _let("tagName/2", $tagName__OR__className);
const $className = /* @__PURE__ */ _let("className/3", $tagName__OR__className);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$tagName($scope, $scope.tagName === "span" ? "div" : "span");
}));
function $setup($scope) {
	$tagName($scope, "span");
	$className($scope, "A");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
