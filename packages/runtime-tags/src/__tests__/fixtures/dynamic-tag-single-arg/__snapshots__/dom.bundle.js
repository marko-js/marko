// total: 13585 (min) 5218 (brotli)
// tags/custom-tag.marko: 0 (min) 1 (brotli)
const $template = "<div> </div>";
const $walks = "D l";
const $input = ($scope, input) => _text($scope.a, input);
function $setup($scope) {
	_return($scope, "hello from other");
}
var custom_tag_default = /* @__PURE__ */ _template("b", $template, "D l", $setup, $input);

// template.marko: 167 (min) 131 (brotli)
const tags = [custom_tag_default];
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2, 0, 0, 1);
const $x__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.d + 1);
}));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$dynamicTag($scope, tags[0], () => [$scope.d]);
	$x__script($scope);
});
