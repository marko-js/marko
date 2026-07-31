// v:template.marko.css
var v_template_marko_default = "\n    circle {\n      fill: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0);\n    }\n  ";

// template.marko
const $template = "<svg><style></style><circle cx=5 cy=5 r=4></circle></svg><button>update</button>";
const $walks = "D l b";
const $color = /*@__PURE__*/ _let("color/5", ($scope) => _style_rule_item($scope, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0", $scope.color));
const $input_color = $color;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$color($scope, "blue");
}));
function $setup($scope) {
	_style_shell($scope, "#style/0");
	$setup__script($scope);
}
const $input = ($scope, input) => $input_color($scope, input.color);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
