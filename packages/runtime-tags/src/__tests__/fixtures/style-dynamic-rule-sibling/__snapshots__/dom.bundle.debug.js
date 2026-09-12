// template.marko
const $template = "<style></style><div><div></div></div>";
const $walks = " b D l";
function $setup($scope) {
	_style_shell($scope, "#style/0");
}
const $input_pct = /*@__PURE__*/ _const("input_pct", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19dynamic-19rule-19sibling-1btemplate-1amarko_0", $scope.input_pct + "%"));
const $input_c = ($scope, input_c) => _attr_class($scope["#div/1"], [void 0, input_c]);
const $input_d = ($scope, input_d) => _attr_class($scope["#div/2"], input_d);
const $input = ($scope, input) => {
	$input_pct($scope, input.pct);
	$input_c($scope, input.c);
	$input_d($scope, input.d);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:template.marko.module.css
var v_template_marko_module_default = "\n  .fill { width: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19dynamic-19rule-19sibling-1btemplate-1amarko_0); }\n";
