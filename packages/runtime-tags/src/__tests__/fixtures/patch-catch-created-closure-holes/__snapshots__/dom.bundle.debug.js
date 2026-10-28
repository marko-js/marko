// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $try_content__input_msg__OR__input_fail = /*@__PURE__*/ _fill_signal("input_msg | __tests__/template.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_msg#0:3_input_fail#0:4/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom($scope._.input_msg) : $scope._.input_msg)));
const $try_content__input_msg = /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_msg/5", $try_content__input_msg__OR__input_fail, 0, "__tests__/template.marko_2_input_msg#0:3/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_msg($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _closure_get("input_fail/6", $try_content__input_msg__OR__input_fail, 0, "__tests__/template.marko_2_input_fail#0:4/subscribe");
const $catch_content__err_message__OR__upper = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_err_message#7_upper#8/init", 9, ($scope) => _text($scope["#text/4"], $scope.err_message + $scope.upper));
const $catch_content__upper = /*@__PURE__*/ _const("upper", ($scope) => {
	_text($scope["#text/3"], $scope.upper);
	$catch_content__err_message__OR__upper($scope);
});
const $catch_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_msg#0:3/init", _closure_resume("__tests__/template.marko_1_input_msg#0:3/subscribe", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_msg", /*@__PURE__*/ _closure_get("input_msg/5", ($scope) => {
	_attr($scope["#b/0"], "title", $scope._.input_msg);
	_text($scope["#text/2"], $scope._.input_msg);
	$catch_content__upper($scope, $scope._.input_msg.toUpperCase());
}), 0)));
const $catch_content__setup = $catch_content__input_msg;
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", ($scope) => {
	_text($scope["#text/1"], $scope.err_message);
	$catch_content__err_message__OR__upper($scope);
});
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b><!> <!> <!> <!></b>", " D%c%c%c%", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_msg($scope, input.msg);
	$input_fail($scope, input.fail);
};
const $input_msg__closure = /*@__PURE__*/ _closure($catch_content__input_msg, $try_content__input_msg);
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_msg", $input_msg__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
