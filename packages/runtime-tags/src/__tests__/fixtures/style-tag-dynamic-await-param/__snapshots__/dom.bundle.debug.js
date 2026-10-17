// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content2__setup = ($scope) => _style_shell($scope, "#style/0");
const $await_content2__color = /*@__PURE__*/ _const("color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1", $scope.color));
const $await_content2__$params = ($scope, $params3) => $await_content2__color($scope, $params3[0]);
const $await_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $await_content__color = /*@__PURE__*/ _const("color", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_0", $scope.color));
const $await_content__$params = ($scope, $params2) => $await_content__color($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<style></style><div class=later></div>", " ", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<style></style><div class=now></div>", " ", $await_content2__setup);
const $if_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $if_content__input_color = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__await_promise($scope, resolveAfter($scope._.input_color, 1));
	$if_content__await_promise2($scope, $scope._.input_color);
});
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	$await_content($scope);
	$await_content2($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!><!>", "b%b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_color($scope, input.color);
};
const $input_color = /*@__PURE__*/ _const("input_color", $if_content__input_color);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// v:template.marko.css
var v_template_marko_default = "\n      .later { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_0); }\n    ";

// v:template.marko.1.css
var v_template_marko_1_default = "\n      .now { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1); }\n    ";
