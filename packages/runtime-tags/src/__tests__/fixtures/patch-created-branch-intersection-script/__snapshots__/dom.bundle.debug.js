// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_suffix__OR__inner__script = _script_patch("__tests__/template.marko_1_input_suffix#0:6_inner#1 >input_suffix inner", ($scope) => console.log("inner", $scope.inner, $scope._.input_suffix));
const $if_content__input_suffix__OR__inner = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_suffix#0:6_inner#1/setup", 2, $if_content__input_suffix__OR__inner__script);
const $if_content__inner = /*@__PURE__*/ _const("inner", $if_content__input_suffix__OR__inner);
const $if_content__input_prefix__OR__input_x = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_prefix#0:4_input_x#0:5/setup", 0, ($scope) => $if_content__inner($scope, $scope._.input_prefix + $scope._.input_x));
const $if_content__input_prefix = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_prefix#0:4/setup", "#text/0", 0, $if_content__input_prefix__OR__input_x);
const $if_content__setup = ($scope) => {
	$if_content__input_prefix._($scope);
	$if_content__input_x._($scope);
	$if_content__input_suffix._($scope);
};
const $if_content__input_x = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_x#0:5/setup", "#text/0", 0, $if_content__input_prefix__OR__input_x);
const $if_content__input_suffix = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_suffix#0:6/setup", "#text/0", 0, $if_content__input_suffix__OR__inner);
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_prefix($scope, input.prefix);
	$input_x($scope, input.x);
	$input_suffix($scope, input.suffix);
};
const $input_prefix = /*@__PURE__*/ _const("input_prefix", $if_content__input_prefix);
const $input_x = /*@__PURE__*/ _const("input_x", $if_content__input_x);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $if_content__input_suffix);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
