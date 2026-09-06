// v:template.marko.css
var v_template_marko_default = ".x { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19stateful-19branch-1btemplate-1amarko_0); }";

// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $if_content__input_color = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_color", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19in-19stateful-19branch-1btemplate-1amarko_0", $scope._.input_color)));
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	$if_content__input_x._($scope);
	_style_shell($scope, "#style/0");
};
const $if_content__input_x = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_x", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.input_x)));
const $if = /*@__PURE__*/ _if("#text/0", "<style></style><b class=x> </b>", " D ", $if_content__setup);
const $s = /*@__PURE__*/ _let("s/6", ($scope) => $if($scope, $scope.s ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, !$scope.s);
}));
function $setup($scope) {
	$s($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_color($scope, input.color);
	$input_x($scope, input.x);
};
const $input_color = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_color", $if_content__input_color);
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_x", $if_content__input_x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
