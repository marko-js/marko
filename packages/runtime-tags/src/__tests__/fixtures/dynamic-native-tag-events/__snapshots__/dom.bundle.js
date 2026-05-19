// total: 12817 (min) 4953 (brotli)
// template.marko: 224 (min) 143 (brotli)
_resume_dynamic_tag();
const $tagName_content = _content_resume("a1", "body content", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, $tagName_content);
const $tagName = /* @__PURE__ */ _let(1, ($scope) => $dynamicTag($scope, $scope.b, () => ({
	class: "A",
	onClick: $onClick($scope)
})));
function $onClick($scope) {
	return function() {
		$tagName($scope, $scope.b === "span" ? "div" : "span");
	};
}
_resume("a0", $onClick);
