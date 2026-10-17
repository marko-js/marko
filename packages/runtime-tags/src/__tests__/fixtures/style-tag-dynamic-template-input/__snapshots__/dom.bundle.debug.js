// tags/swatch.marko
const $template$1 = "<style></style><div class=swatch></div>";
const $walks$1 = " c";
function $setup$1($scope) {
	_style_shell($scope, "#style/0");
}
const $input_color$1 = /*@__PURE__*/ _const("input_color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0", $scope.input_color));
const $input$1 = ($scope, input) => $input_color$1($scope, input.color);
var swatch_default = /*@__PURE__*/ _template("__tests__/tags/swatch.marko", $template$1, " c", $setup$1, $input$1);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = ($_) => {};
const $for_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $for_content__color = ($scope, color) => $input_color$1($scope["#childScope/0"], color);
const $for_content__$params = ($scope, $params2) => $for_content__color($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" c"), $for_content__setup, $for_content__$params);
const $input_colors = ($scope, input_colors) => $for($scope, [input_colors]);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_show__OR__input_color = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_show ? swatch_default : null, ($_) => ({ color: $scope.input_color })));
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_color);
const $input_color = /*@__PURE__*/ _const("input_color", $input_show__OR__input_color);
const $input = ($scope, input) => {
	$input_colors($scope, input.colors);
	$input_show($scope, input.show);
	$input_color($scope, input.color);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/v:swatch.marko.css
var v_swatch_marko_default = "\n  .swatch { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0); }\n";
