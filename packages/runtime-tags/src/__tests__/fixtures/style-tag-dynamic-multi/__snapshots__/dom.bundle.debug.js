// template.marko
const $template = "<style></style><header class=a>Header</header><main class=a>Main</main>";
const $walks = " c";
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	_style_shell($scope, "#style/0");
}
const $input_color = /* @__PURE__ */ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19multi-1btemplate-1amarko_0", $scope.input_color));
const $input_width = /* @__PURE__ */ _const("input_width", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19multi-1btemplate-1amarko_1", $scope.input_width));
const $input = ($scope, input) => {
	$input_color($scope, input.color);
	$input_width($scope, input.width);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " c", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .a { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19multi-1btemplate-1amarko_0); width: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19multi-1btemplate-1amarko_1) }\n";
