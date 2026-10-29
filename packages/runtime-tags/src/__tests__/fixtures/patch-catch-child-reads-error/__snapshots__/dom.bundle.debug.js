// tags/child.marko
const $template$1 = "<span><!> <!> <!></span>";
const $walks$1 = "D%c%c%l";
const $setup$1 = ($_) => {};
const $input_message = ($scope, input_message) => _text($scope["#text/0"], input_message);
const $input_count = ($scope, input_count) => _text($scope["#text/1"], input_count);
const $input_label$1 = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input$1 = ($scope, input) => {
	$input_message($scope, input.message);
	$input_count($scope, input.count);
	$input_label$1($scope, input.label);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_error#0:6/init", /*@__PURE__*/ _closure_get("input_error/9", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_2_input_error#0:6/subscribe"));
const $try_content__setup = $try_content__input_error;
const $catch_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", _closure_resume("__tests__/template.marko_1_input_label#0:5/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)), 0)));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__count($scope);
};
const $catch_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _closure_get("count/10", ($scope) => $input_count($scope["#childScope/0"], $scope._.count), 0, "__tests__/template.marko_1_count#0:7/subscribe"));
const $catch_content__err_message = ($scope, err_message) => $input_message($scope["#childScope/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = _let("count/7", ($scope) => {
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
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
