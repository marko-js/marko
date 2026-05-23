// total: 12920 (min) 4996 (brotli)
// template.marko: 208 (min) 153 (brotli)
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("a0", "body content", "b"));
const $tagName__OR__className = /* @__PURE__ */ _or(4, ($scope) => $dynamicTag($scope, $scope.c, () => ({ class: $scope.d })));
const $tagName__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$tagName($scope, $scope.c === "span" ? "div" : "span");
}));
const $tagName = /* @__PURE__ */ _let(2, ($scope) => {
	$tagName__OR__className($scope);
	$tagName__script($scope);
});
