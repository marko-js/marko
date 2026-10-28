// tags/child.marko
const $template$1 = "<span><!>|<!>|<!></span>";
const $walks$1 = "D%c%c%l";
const $setup$1 = ($_) => {};
const $input_msg$1 = ($scope, input_msg) => _text($scope["#text/0"], input_msg);
const $input_count = ($scope, input_count) => _text($scope["#text/1"], input_count);
const $input_label$1 = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input$1 = ($scope, input) => {
	$input_msg$1($scope, input.msg);
	$input_count($scope, input.count);
	$input_label$1($scope, input.label);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(e) {
	throw e;
}
const $try_content__input_fail__OR__input_msg = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_fail#0:6_input_msg#0:7/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom(new Error($scope._.input_msg)) : "ok"));
const $try_content__input_fail = /*@__PURE__*/ _closure_get("input_fail/10", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_2_input_fail#0:6/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_fail($scope);
	$try_content__input_msg($scope);
};
const $try_content__input_msg = /*@__PURE__*/ _closure_get("input_msg/11", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_2_input_msg#0:7/subscribe");
const $catch_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/9", ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe"), 0));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__n($scope);
};
const $catch_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:8/init", /*@__PURE__*/ _closure_get("n/12", ($scope) => $input_count($scope["#childScope/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:8/subscribe"));
const $catch_content__err_message = ($scope, err_message) => $input_msg$1($scope["#childScope/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $catch_content__setup, $catch_content__$params);
const $n__closure = /*@__PURE__*/ _closure($catch_content__n);
const $n = /*@__PURE__*/ _let("n/8", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_fail($scope, input.fail);
	$input_msg($scope, input.msg);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($try_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
