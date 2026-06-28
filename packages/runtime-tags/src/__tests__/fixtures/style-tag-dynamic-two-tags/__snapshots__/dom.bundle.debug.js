// template.marko
const $template = "<style></style><style></style><div class=a>A</div><div class=b>B</div>";
const $walks = "  c";
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	_style_shell($scope, "#style/0");
	_attr_nonce($scope, "#style/1");
	_style_shell($scope, "#style/1");
}
const $input_a = /* @__PURE__ */ _const("input_a", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_0", $scope.input_a));
const $input_b = /* @__PURE__ */ _const("input_b", ($scope) => _style_rule_item($scope["#style/1"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_1", $scope.input_b));
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "  c", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .b { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19two-19tags-1btemplate-1amarko_1); }\n";
