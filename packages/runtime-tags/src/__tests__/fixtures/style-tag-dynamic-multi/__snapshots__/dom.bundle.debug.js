// template.marko
const $template = "<style></style><header class=a>Header</header><main class=a>Main</main>";
const $walks = " d";
function $setup($scope) {
	_style_shell($scope, "#style/0");
}
const $input_color = /*@__PURE__*/ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M___tests__-1btemplate-1amarko_0", $scope.input_color));
const $input_width = /*@__PURE__*/ _const("input_width", ($scope) => _style_rule_item($scope["#style/0"], "--M___tests__-1btemplate-1amarko_1", $scope.input_width));
const $input = ($scope, input) => {
	$input_color($scope, input.color);
	$input_width($scope, input.width);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " d", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .a { color: var(--M___tests__-1btemplate-1amarko_0); width: var(--M___tests__-1btemplate-1amarko_1) }\n";
