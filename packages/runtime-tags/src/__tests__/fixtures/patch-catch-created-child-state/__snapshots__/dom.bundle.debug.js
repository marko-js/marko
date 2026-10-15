// tags/child.marko
const $template$1 = "<span><!> <!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_message = ($scope, input_message) => _text($scope["#text/0"], input_message);
const $input_count = ($scope, input_count) => _text($scope["#text/1"], input_count);
const $input$1 = ($scope, input) => {
	$input_message($scope, input.message);
	$input_count($scope, input.count);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(msg) {
	throw new Error(msg);
}
const $catch_content__count = _closure_get("count/10", ($scope) => $input_count($scope["#childScope/0"], $scope._.count), 0, "__tests__/template.marko_2_count#0:7/subscribe");
const $catch_content__setup = $catch_content__count;
const $catch_content__err_message = ($scope, err_message) => $input_message($scope["#childScope/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $catch_content__setup, $catch_content__$params);
const $try_content__input_fail__OR__input_msg = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom($scope._.input_msg) : $scope._.input_msg));
const $try_content__input_fail = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_fail#0:5/init", "input_fail/8", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_1_input_fail#0:5/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_fail($scope);
	$try_content__input_msg($scope);
};
const $try_content__input_msg = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_msg#0:6/init", "input_msg/9", $try_content__input_fail__OR__input_msg, 0, "__tests__/template.marko_1_input_msg#0:6/subscribe");
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => {
	$input_fail($scope, input.fail);
	$input_msg($scope, input.msg);
};
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($try_content__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
