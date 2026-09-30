// template.marko
const $template = "<style></style><div class=content>Hello</div>";
const $walks = " c";
function $setup($scope) {
	_style_shell($scope, "#style/0");
}
const $input_color = /*@__PURE__*/ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M___tests__-1btemplate-1amarko_0", $scope.input_color));
const $input = ($scope, input) => $input_color($scope, input.color);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " c", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .content {\n    color: var(--M___tests__-1btemplate-1amarko_0);\n  }\n";
