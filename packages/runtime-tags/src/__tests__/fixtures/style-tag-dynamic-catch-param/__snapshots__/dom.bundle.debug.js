// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $catch_content__setup = ($scope) => _style_shell($scope, "#style/0");
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19catch-19param-1btemplate-1amarko_0", $scope.err_message));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<style></style><div class=caught></div>", " ", $catch_content__setup, $catch_content__$params);
const $try_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("red");
})());
const $if_content__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content__setup, 0, $catch_content);
const $if_content__setup = $if_content__try;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// v:template.marko.css
var v_template_marko_default = "\n        .caught { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19catch-19param-1btemplate-1amarko_0); }\n      ";
