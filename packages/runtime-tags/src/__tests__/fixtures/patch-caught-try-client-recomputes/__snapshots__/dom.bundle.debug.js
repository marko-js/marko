// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_label__OR__input_count = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_0_input_label#2_input_count#3/setup", 4, ($scope) => _return($scope, $scope.input_label + $scope.input_count));
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__input_count);
const $input_count$1 = /*@__PURE__*/ _const("input_count", $input_label__OR__input_count);
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_count$1($scope, input.count);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
function boom(message) {
	throw new Error(message);
}
const $try_content2__input_late = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_input_late#0:7/subscribe", "input_late/11", ($scope) => _text($scope["#text/0"], $scope._.input_late ? boom("late") : "ok"));
const $try_content2__setup = $try_content2__input_late;
const $catch_content2__input_label__OR__err_message = /*@__PURE__*/ _or_patch("__tests__/template.marko_3_input_label#0:4_err_message#6/setup", 7, ($scope) => _text($scope["#text/0"], $scope._.input_label + $scope.err_message));
const $catch_content2__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/8", ($scope) => {
	$input_label$1($scope["#childScope/1"], $scope._.input_label);
	$catch_content2__input_label__OR__err_message($scope);
}, 0, "__tests__/template.marko_0_input_label#4/subscribers", 1);
const $catch_content2__setup = ($scope) => {
	$catch_content2__input_label($scope);
	$catch_content2__input_count($scope);
	_var($scope, "#childScope/1", $catch_content2__text);
};
const $catch_content2__input_count = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_count#0:5/subscribe", "input_count/9", ($scope) => $input_count$1($scope["#childScope/1"], $scope._.input_count), 0, "__tests__/template.marko_0_input_count#5/subscribers", 1);
const $catch_content2__err_message = /*@__PURE__*/ _const("err_message", $catch_content2__input_label__OR__err_message);
const $catch_content2__text = _var_resume("__tests__/template.marko_3_text#8/var", ($scope, text) => _text($scope["#text/3"], text));
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content_resume("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<i> </i>`)(""), /*@__PURE__*/ ((_w0) => `D 0${_w0}&lD l`)(""), $catch_content2__setup, $catch_content2__$params);
const $try_content__input_early = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_early#0:6/subscribe", "input_early/10", ($scope) => _text($scope["#text/0"], $scope._.input_early ? boom("early") : "ok"));
const $try_content__setup = $try_content__input_early;
const $catch_content__input_label__OR__err_message = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_label#0:4_err_message#6/setup", 7, ($scope) => _text($scope["#text/0"], $scope._.input_label + $scope.err_message));
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:4/subscribe", "input_label/8", ($scope) => {
	$input_label$1($scope["#childScope/1"], $scope._.input_label);
	$catch_content__input_label__OR__err_message($scope);
}, 0, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__input_count($scope);
	_var($scope, "#childScope/1", $catch_content__text);
};
const $catch_content__input_count = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_count#0:5/subscribe", "input_count/9", ($scope) => $input_count$1($scope["#childScope/1"], $scope._.input_count), 0, "__tests__/template.marko_0_input_count#5/subscribers", 0);
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__input_label__OR__err_message);
const $catch_content__text = _var_resume("__tests__/template.marko_1_text#8/var", ($scope, text) => _text($scope["#text/3"], text));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<i> </i>`)(""), /*@__PURE__*/ ((_w0) => `D 0${_w0}&lD l`)(""), $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content2__setup, 0, $catch_content2);
function $setup($scope) {
	$try($scope);
	$try2($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_count($scope, input.count);
	$input_early($scope, input.early);
	$input_late($scope, input.late);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label, $catch_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_count__closure = /*@__PURE__*/ _closure($catch_content__input_count, $catch_content2__input_count);
const $input_count = /*@__PURE__*/ _const("input_count", $input_count__closure);
const $input_early__closure = /*@__PURE__*/ _closure($try_content__input_early);
const $input_early = /*@__PURE__*/ _const("input_early", $input_early__closure);
const $input_late__closure = /*@__PURE__*/ _closure($try_content2__input_late);
const $input_late = /*@__PURE__*/ _const("input_late", $input_late__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
