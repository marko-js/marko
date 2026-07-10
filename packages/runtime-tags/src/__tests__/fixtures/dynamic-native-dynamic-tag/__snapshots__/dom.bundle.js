// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a0", "body content", "b"));
const $tagName__OR__className = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, "c" in $scope ? "c" in $scope ? $scope.c : "span" : "span", () => ({ class: "d" in $scope ? "d" in $scope ? $scope.d : "A" : "A" })));
const $tagName = /*@__PURE__*/ _let(2, $tagName__OR__className);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$tagName($scope, ("c" in $scope ? $scope.c : "span") === "span" ? "div" : "span");
}));
