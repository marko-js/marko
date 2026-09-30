// template.marko
const $tagName_content = _content("a1", "body content");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $tagName_content);
const $tagName = /*@__PURE__*/ _let(1, ($scope) => $dynamicTag($scope, $scope.b, () => ({
	class: "A",
	onClick: $onClick($scope)
})));
const $onClick = ($scope) => function() {
	$tagName($scope, $scope.b === "span" ? "div" : "span");
};
_resumed.a0 = $onClick;
