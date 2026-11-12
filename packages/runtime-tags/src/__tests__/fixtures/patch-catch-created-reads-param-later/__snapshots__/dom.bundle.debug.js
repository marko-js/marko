// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $try_content__input_msg__OR__input_fail = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_msg#0:3_input_fail#0:4/setup", 1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom($scope._.input_msg) : $scope._.input_msg));
const $try_content__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_msg#0:3/subscribe", "input_msg/5", $try_content__input_msg__OR__input_fail);
const $try_content__setup = ($scope) => {
	$try_content__input_msg($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_fail#0:4/subscribe", "input_fail/6", $try_content__input_msg__OR__input_fail);
const $catch_content__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_msg#0:3/subscribe", "input_msg/5", ($scope) => _text($scope["#text/1"], $scope._.input_msg), 0, "__tests__/template.marko_0_input_msg#3/subscribers", 0);
const $catch_content__setup = $catch_content__input_msg;
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b><!> <!></b>", "D%c%", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => document.body.dataset.ready = "1");
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_msg($scope, input.msg);
	$input_fail($scope, input.fail);
};
const $input_msg__closure = /*@__PURE__*/ _closure($catch_content__input_msg, $try_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
