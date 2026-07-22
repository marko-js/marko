// tags/custom-tag.marko
const $template = "<div>tag <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $input_ = ($scope, input_0) => _text($scope.a, input_0);
const $input = ($scope, input) => $input_($scope, input[0]);
var custom_tag_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
const $x_content = _content_resume("a0", "Fallback Body", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $x_content, 0, 1);
const $x = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c, () => [
	1,
	2,
	{ content: $x_content($scope) }
]));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.c ? null : custom_tag_default);
}));
