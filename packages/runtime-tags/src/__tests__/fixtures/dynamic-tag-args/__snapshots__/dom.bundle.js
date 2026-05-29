// total: 13832 (min) 5309 (brotli)
// tags/custom-tag.marko: 0 (min) 1 (brotli)
const $template = "<div> </div>";
const $walks = "D l";
const $setup = () => {};
const $input = ($scope, input) => _text($scope.a, JSON.stringify(input));
var custom_tag_default = /* @__PURE__ */ _template("b", $template, "D l", $setup, $input);

// template.marko: 173 (min) 133 (brotli)
const tags = [custom_tag_default];
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2, 0, 0, 1);
const $x__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.g + 1);
}));
const $x = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$dynamicTag($scope, tags[0], () => [$scope.g, "foo"]);
	$x__script($scope);
});
