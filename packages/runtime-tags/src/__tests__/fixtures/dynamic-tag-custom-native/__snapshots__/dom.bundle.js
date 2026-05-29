// total: 13774 (min) 5319 (brotli)
// tags/child.marko: 0 (min) 1 (brotli)
const $template = "<div>Id is <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $id = ($scope, id) => _text($scope.a, id);
const $input = ($scope, input) => $id($scope, input.id);
var child_default = /* @__PURE__ */ _template("b", $template, $walks, $setup, $input);

// template.marko: 167 (min) 129 (brotli)
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(1);
const $tagName__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$tagName($scope, $scope.c === child_default ? "div" : child_default);
}));
const $tagName = /* @__PURE__ */ _let(2, ($scope) => {
	$dynamicTag($scope, $scope.c, () => ({ id: "dynamic" }));
	$tagName__script($scope);
});
