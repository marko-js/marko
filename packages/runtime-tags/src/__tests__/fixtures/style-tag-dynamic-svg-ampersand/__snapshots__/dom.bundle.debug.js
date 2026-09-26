// template.marko
const $template = "<svg><style></style><rect width=5 height=5></rect></svg>";
const $walks = "D l";
function $setup($scope) {
	_style_shell($scope, "#style/0");
}
const $input_fill = /*@__PURE__*/ _const("input_fill", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-19ampersand-1btemplate-1amarko_0", $scope.input_fill));
const $input_stroke = /*@__PURE__*/ _const("input_stroke", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-19ampersand-1btemplate-1amarko_1", $scope.input_stroke));
const $input = ($scope, input) => {
	$input_fill($scope, input.fill);
	$input_stroke($scope, input.stroke);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n    rect {\n      fill: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-19ampersand-1btemplate-1amarko_0);\n      stroke: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-19ampersand-1btemplate-1amarko_1);\n    }\n  ";
