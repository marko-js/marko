// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => console.log("setup"));
const $setup$1 = $setup__script$1;
const $input_message__script = _script("__tests__/tags/child.marko_0_input_message#3", ($scope) => console.log("message", $scope.input_message));
const $input_message = /*@__PURE__*/ _const("input_message", ($scope) => {
	_text($scope["#text/0"], $scope.input_message);
	$input_message__script($scope);
});
const $input_label__script = _script("__tests__/tags/child.marko_0_input_label#4", ($scope) => console.log("label", $scope.input_label));
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__script);
const $input_count__script = _script("__tests__/tags/child.marko_0_input_count#5", ($scope) => console.log("count", $scope.input_count));
const $input_count = /*@__PURE__*/ _const("input_count", $input_count__script);
const $input$1 = ($scope, input) => {
	$input_message($scope, input.message);
	$input_label($scope, input.label);
	$input_count($scope, input.count);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(msg) {
	throw new Error(msg);
}
const $try_content__input_msg__OR__input_fail = /*@__PURE__*/ _fill_join("| __tests__/template.marko_fill0", "input_msg", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_msg#0:5_input_fail#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom($scope._.input_msg) : $scope._.input_msg)));
const $try_content__input_msg = /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_msg/8", $try_content__input_msg__OR__input_fail, 0, "__tests__/template.marko_2_input_msg#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_msg($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _closure_get("input_fail/9", $try_content__input_msg__OR__input_fail, 0, "__tests__/template.marko_2_input_fail#0:6/subscribe");
const $catch_content__input_msg = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_msg#0:5/init", _fill_join_closure("__tests__/template.marko_fill0", "input_msg", /*@__PURE__*/ _closure_get("input_msg/8", ($scope) => $input_label($scope["#childScope/0"], $scope._.input_msg), 0, "__tests__/template.marko_1_input_msg#0:5/subscribe"), 0));
const $catch_content__setup = ($scope) => {
	$catch_content__input_msg($scope);
	$catch_content__count($scope);
	$setup$1($scope["#childScope/0"]);
};
const $catch_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _closure_get("count/10", ($scope) => $input_count($scope["#childScope/0"], $scope._.count), 0, "__tests__/template.marko_1_count#0:7/subscribe"));
const $catch_content__err_message = ($scope, err_message) => $input_message($scope["#childScope/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_msg($scope, input.msg);
	$input_fail($scope, input.fail);
};
const $input_msg__closure = /*@__PURE__*/ _closure($catch_content__input_msg, $try_content__input_msg);
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_msg", $input_msg__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
