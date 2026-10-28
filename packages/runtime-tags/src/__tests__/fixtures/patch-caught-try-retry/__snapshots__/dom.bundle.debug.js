// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
function check(fail) {
	if (fail) throw new Error("down");
}
const $catch_content = _content("__tests__/template.marko_3*content", "Unavailable");
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_fail#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_fail", /*@__PURE__*/ _closure_get("input_fail/5", ($scope) => check($scope._._.input_fail), ($scope) => $scope._._, "__tests__/template.marko_2_input_fail#0:4/subscribe"), 0));
const $try_content__setup = $try_content__input_fail;
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<p>Ready</p>", 0, $try_content__setup, 0, $catch_content);
const $if_content__setup = $if_content__try;
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_fail($scope, input.fail);
};
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
