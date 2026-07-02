// template.marko
const $template = "<!><!><span>after</span>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_color = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19conditional-1btemplate-1amarko_0", $scope._.input_color));
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	_style_shell($scope, "#style/0");
};
const $if = /* @__PURE__ */ _if("#text/0", "<style></style><div class=box>Hi</div>", " b", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_color($scope, input.color);
};
const $input_color = /* @__PURE__ */ _const("input_color", $if_content__input_color);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19conditional-1btemplate-1amarko_0); }\n  ";
