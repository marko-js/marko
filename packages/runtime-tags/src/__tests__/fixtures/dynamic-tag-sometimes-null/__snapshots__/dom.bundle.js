// template.marko
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("a0", "Body Content", "b"));
const $x__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.c ? null : "div");
}));
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	$dynamicTag($scope, $scope.c);
	$x__script($scope);
});
