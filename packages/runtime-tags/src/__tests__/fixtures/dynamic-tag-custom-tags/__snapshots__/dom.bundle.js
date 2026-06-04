// total: 13801 (min) 5307 (brotli)
// tags/child1.marko: 0 (min) 1 (brotli)
const $template$1 = "<div>Child 1 has <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $value$1 = ($scope, value) => _text($scope.a, value);
const $input$1 = ($scope, input) => $value$1($scope, input.value);
var child1_default = /* @__PURE__ */ _template("b", $template$1, $walks$1, $setup$1, $input$1);

// tags/child2.marko: 0 (min) 1 (brotli)
const $template = "<div>Child 2 has <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $value = ($scope, value) => _text($scope.a, value);
const $input = ($scope, input) => $value($scope, input.value);
var child2_default = /* @__PURE__ */ _template("c", $template, $walks, $setup, $input);

// template.marko: 192 (min) 137 (brotli)
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $tagName__OR__val = /* @__PURE__ */ _or(4, ($scope) => $dynamicTag($scope, $scope.c, () => ({ value: $scope.d })));
const $tagName__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$tagName($scope, $scope.c === child1_default ? child2_default : child1_default);
}));
const $tagName = /* @__PURE__ */ _let(2, ($scope) => {
	$tagName__OR__val($scope);
	$tagName__script($scope);
});
