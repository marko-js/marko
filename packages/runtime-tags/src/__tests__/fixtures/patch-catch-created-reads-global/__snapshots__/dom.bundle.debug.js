// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
function boom(msg) {
	throw new Error(msg);
}
const $await_content2__$params = ($scope, $params5) => _text($scope["#text/0"], $params5[0]);
const $catch_content2__err_message__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_5_$global_label#0:10_err_message#4", ($scope) => _text($scope["#text/0"], _global_read($scope.$global, "label") + " " + $scope.err_message), "label");
const $catch_content2__err_message = /*@__PURE__*/ _const("err_message", $catch_content2__err_message__$global_label);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<i> </i>", "D ");
const $catch_content2__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $catch_content2__setup__$global_p = /*@__PURE__*/ _fill_global("__tests__/template.marko_5_$global_p#0:14", ($scope) => $catch_content2__await_promise($scope, $scope.$global.p), "p");
const $catch_content2__setup = ($scope) => {
	$await_content2($scope);
	$catch_content2__setup__$global_p($scope);
};
const $catch_content2__$params = ($scope, $params4) => $catch_content2__err_message($scope, $params4[0]?.message);
const $catch_content2 = _content_resume("__tests__/template.marko_5*content", "<b> </b><!><!>", "D l%", $catch_content2__setup, $catch_content2__$params);
const $await_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $catch_content__err_message__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_3_$global_label#0:10_err_message#4", ($scope) => _text($scope["#text/0"], _global_read($scope.$global, "label") + " " + $scope.err_message), "label");
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__err_message__$global_label);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<i> </i>", "D ");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $catch_content__setup__$global_p = /*@__PURE__*/ _fill_global("__tests__/template.marko_3_$global_p#0:14", ($scope) => $catch_content__await_promise($scope, $scope.$global.p), "p");
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__setup__$global_p($scope);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $try_content2__input_late = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_late#0:5/subscribe", "input_late/7", ($scope) => _text($scope["#text/0"], $scope._.input_late ? boom("late") : "ok"));
const $try_content2__setup = $try_content2__input_late;
const $try_content__input_early = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_early#0:4/subscribe", "input_early/6", ($scope) => _text($scope["#text/0"], $scope._.input_early ? boom("early") : "ok"));
const $try_content__setup = $try_content__input_early;
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content2__setup, 0, $catch_content2);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => document.body.dataset.ready = "1");
function $setup($scope) {
	$try($scope);
	$try2($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_early($scope, input.early);
	$input_late($scope, input.late);
};
const $input_early__closure = /*@__PURE__*/ _closure($try_content__input_early);
const $input_early = /*@__PURE__*/ _const("input_early", $input_early__closure);
const $input_late__closure = /*@__PURE__*/ _closure($try_content2__input_late);
const $input_late = /*@__PURE__*/ _const("input_late", $input_late__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
