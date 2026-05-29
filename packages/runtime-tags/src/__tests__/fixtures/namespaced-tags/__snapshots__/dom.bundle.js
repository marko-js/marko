// total: 13844 (min) 5304 (brotli)
// template.marko: 623 (min) 305 (brotli)
const $Child_content2 = _content_resume("a1", "Hi", "b");
const $Child_content = _content_resume("a0", "Hi", "b");
const $Parent_content__input_value = /* @__PURE__ */ _closure_get(10, ($scope) => _html($scope, $scope._.k, "a"));
const $dynamicTag3 = /* @__PURE__ */ _dynamic_tag(5, _content_resume("a2", " ", " b", $Parent_content__input_value));
const $Parent__OR__Child = /* @__PURE__ */ _or(13, _script("a3", ($scope) => {
	$scope.l;
	$scope.m;
	for (const node of $scope.a.querySelectorAll("a")) if (node.getAttribute("ns") !== node.namespaceURI) node.setAttribute("ns", node.namespaceURI);
}));
const $Parent__script = _script("a5", ($scope) => _on($scope.g, "click", function() {
	$Parent($scope, $scope.l === "div" ? "svg" : "div");
}));
const $Parent = /* @__PURE__ */ _let(11, ($scope) => {
	$dynamicTag3($scope, $scope.l);
	$Parent__OR__Child($scope);
	$Parent__script($scope);
});
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2, $Child_content);
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag(4, $Child_content2);
const $Child__script = _script("a4", ($scope) => _on($scope.h, "click", function() {
	$Child($scope, $scope.m === "a" ? null : "a");
}));
const $Child = /* @__PURE__ */ _let(12, ($scope) => {
	$dynamicTag($scope, $scope.m, () => ({ href: "#bar" }));
	$dynamicTag2($scope, $scope.m, () => ({ href: "#bar" }));
	$Parent__OR__Child($scope);
	$Child__script($scope);
});
