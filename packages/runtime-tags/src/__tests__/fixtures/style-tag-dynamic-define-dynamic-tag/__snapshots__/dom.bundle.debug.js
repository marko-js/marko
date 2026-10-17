// template.marko
const $template = "<!><!><span>after</span>";
const $walks = "b%c";
const $Box_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $Box_content__color = /*@__PURE__*/ _const("color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0", $scope.color));
const $Box_content__$params = ($scope, $params2) => $Box_content__color($scope, $params2[0].color);
const $Box_content = _content("__tests__/template.marko_1*content", "<style></style><div class=box>Hi</div>", " ", $Box_content__setup, $Box_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_color__OR__Box = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_show ? $scope.Box : null, ($_) => ({ color: $scope.input_color })), 2);
const $Box = /*@__PURE__*/ _const("Box", $input_show__OR__input_color__OR__Box);
function $setup($scope) {
	$Box($scope, { content: $Box_content($scope) });
}
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_color__OR__Box);
const $input_color = /*@__PURE__*/ _const("input_color", $input_show__OR__input_color__OR__Box);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_color($scope, input.color);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0); }\n  ";
