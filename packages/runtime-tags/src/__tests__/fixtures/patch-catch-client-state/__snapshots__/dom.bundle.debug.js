// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/tags/panel.marko_2_input_error#0:4/init", "input_error/6", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/tags/panel.marko_2_input_error#0:4/subscribe");
const $try_content__setup = $try_content__input_error;
const $catch_content__text = ($scope, text) => _text($scope["#text/1"], text);
const $catch_content__input_label__OR__err_message = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill0", "input_label", /*@__PURE__*/ _shell_or("__tests__/tags/panel.marko_1_input_label#0:3_err_message#5/init", 6, ($scope) => $catch_content__text($scope, `${$scope._.input_label}: ${$scope.err_message}`)), "input_label/5", 0);
const $catch_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", $catch_content__input_label__OR__err_message, 0, "__tests__/tags/panel.marko_1_input_label#0:3/subscribe");
const $catch_content__n = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_fill1", "n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $catch_content__setup__script = _script("__tests__/tags/panel.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__n($scope, +$scope.n + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__setup__script($scope);
	$catch_content__n($scope, 0);
};
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__input_label__OR__err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/panel.marko_1*content", "<button class=inc><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$try($scope);
}
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_error$1($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error$1 = /*@__PURE__*/ _const("input_error", $input_error__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=rename>rename</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $label = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "label/5", ($scope) => $input_label($scope["#childScope/1"], $scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, $scope.label + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$label($scope, "label");
}
const $input_error = ($scope, input_error) => $input_error$1($scope["#childScope/1"], input_error);
const $input = ($scope, input) => $input_error($scope, input.error);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
