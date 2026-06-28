// template.marko
const $template = "<style></style><div class=content>Hello</div>";
const $walks = " b";
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	_style_shell($scope, "#style/0");
}
const $input_color = /* @__PURE__ */ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-1btemplate-1amarko_0", $scope.input_color));
const $input = ($scope, input) => $input_color($scope, input.color);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .content {\n    color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-1btemplate-1amarko_0);\n  }\n";
