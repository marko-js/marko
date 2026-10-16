// v:template.marko.css
var v_template_marko_default = "\n    .content {\n      color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0);\n    }\n  ";

// template.marko
const $template = "<button>show</button><!><!>";
const $walks = " b%c";
const $if_content__input_color = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0", $scope._.input_color));
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	_style_shell($scope, "#style/0");
};
const $if = /*@__PURE__*/ _if("#text/1", "<style></style><div class=content>Hello</div>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_color($scope, input.color);
const $input_color = /*@__PURE__*/ _const("input_color", $if_content__input_color);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
