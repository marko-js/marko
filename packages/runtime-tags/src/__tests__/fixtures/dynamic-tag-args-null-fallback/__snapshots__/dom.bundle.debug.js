// tags/custom-tag.marko
const $template$1 = "<div>tag <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_ = ($scope, input_0) => _text($scope["#text/0"], input_0);
const $input = ($scope, input) => $input_($scope, input[0]);
var custom_tag_default = /*@__PURE__*/ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $x_content = _content_resume("__tests__/template.marko_1_content", "Fallback Body", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $x_content, 0, 1);
const $x = /*@__PURE__*/ _let("x/2", ($scope) => $dynamicTag($scope, $scope.x, () => [
	1,
	2,
	{ content: $x_content($scope) }
]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x ? null : custom_tag_default);
}));
function $setup($scope) {
	$x($scope, null);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
