// template.marko
_resume_dynamic_tag();
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a1", "body content", "b"));
const $tagName = /*@__PURE__*/ _let(1, ($scope) => $dynamicTag($scope, "b" in $scope ? $scope.b : "span", () => ({
	class: "A",
	onClick: $onClick($scope)
})));
function $onClick($scope) {
	return function() {
		$tagName($scope, ("b" in $scope ? $scope.b : "span") === "span" ? "div" : "span");
	};
}
_resume("a0", $onClick);
