// template.marko
const $template = "<!><!><span>after</span>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $for_content__color = /*@__PURE__*/ _const("color", ($scope) => {
	_style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19loop-19param-1btemplate-1amarko_0", $scope.color);
	_text($scope["#text/1"], $scope.color);
});
const $for_content__$params = ($scope, $params2) => $for_content__color($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<style></style><div class=box> </div>", " bD ", $for_content__setup, $for_content__$params);
const $input_colors = ($scope, input_colors) => $for($scope, [input_colors]);
const $input = ($scope, input) => $input_colors($scope, input.colors);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19loop-19param-1btemplate-1amarko_0); }\n  ";
