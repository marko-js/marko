// template.marko
const $template = "<style></style><div class=box>Hi</div>";
const $walks = " b";
function $setup($scope) {
	_style_shell($scope, "#style/0");
}
const $input_block = /*@__PURE__*/ _const("input_block", ($scope) => _style_rule_item($scope, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19shorthand-1btemplate-1amarko_0", $scope.input_block));
const $input_inline = /*@__PURE__*/ _const("input_inline", ($scope) => _style_rule_item($scope, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19shorthand-1btemplate-1amarko_1", $scope.input_inline));
const $input = ($scope, input) => {
	$input_block($scope, input.block);
	$input_inline($scope, input.inline);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .box { margin: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19shorthand-1btemplate-1amarko_0) var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19shorthand-1btemplate-1amarko_1) }\n";
