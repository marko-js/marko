// tags/inner.marko
const $template$1 = "<span>inner</span>";
const $walks$1 = "b";
const $setup__script = _script("__tests__/tags/inner.marko_0", ($scope) => console.log("inner setup"));
const $setup$1 = $setup__script;
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$1, "b", $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $catch_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $catch_content__err_message__script = _script("__tests__/template.marko_2_err_message#3", ($scope) => console.log("catch", $scope.err_message));
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__err_message__script);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $catch_content__setup, $catch_content__$params);
const $try_content__input_fail__OR__input_msg = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom($scope._.input_msg) : $scope._.input_msg));
const $try_content__input_fail = /*@__PURE__*/ _closure_get("input_fail/5", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_1_input_fail#0:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_fail($scope);
	$try_content__input_msg($scope);
};
const $try_content__input_msg = /*@__PURE__*/ _closure_get("input_msg/6", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_1_input_msg#0:4/subscribe");
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_fail($scope, input.fail);
	$input_msg($scope, input.msg);
};
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($try_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
