// total: 13043 (min) 5010 (brotli)
// template.marko: 220 (min) 139 (brotli)
_resume_dynamic_tag();
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("a1", "body content", "b"));
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
