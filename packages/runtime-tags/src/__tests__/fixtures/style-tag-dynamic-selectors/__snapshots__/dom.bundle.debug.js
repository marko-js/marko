// template.marko
const $template = "<style></style><div class=card>Card</div>";
const $walks = " b";
function $setup($scope) {
	_style_shell($scope, "#style/0");
}
const $input_color = /* @__PURE__ */ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_0", $scope.input_color));
const $input_pad = /* @__PURE__ */ _const("input_pad", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_1", $scope.input_pad));
const $input_hover = /* @__PURE__ */ _const("input_hover", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_2", $scope.input_hover));
const $input_wide = /* @__PURE__ */ _const("input_wide", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_3", $scope.input_wide));
const $input = ($scope, input) => {
	$input_color($scope, input.color);
	$input_pad($scope, input.pad);
	$input_hover($scope, input.hover);
	$input_wide($scope, input.wide);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n  .card {\n    color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_0);\n    padding: calc(var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_1) * 1px);\n  }\n  .card:hover {\n    color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_2);\n  }\n  @media (min-width: 600px) {\n    .card { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19selectors-1btemplate-1amarko_3) }\n  }\n";
