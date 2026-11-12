// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_early($scope["#childScope/0"], true);
	$input_n($scope["#childScope/0"]);
}
const $input_late = ($scope, input_late) => $input_late$1($scope["#childScope/0"], input_late);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_late($scope, input.late);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $template = "<p> </p><!><!><!>";
const $walks = "D l%b%c";
function boom(msg) {
	throw new Error(msg);
}
const $try_content2__input_late = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_4_input_late#0:8/subscribe", "input_late/11", ($scope) => _text($scope["#text/0"], $scope._.input_late ? boom("late") : "ok"));
const $try_content2__setup = $try_content2__input_late;
const $catch_content2__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_3_input_label#0:6/subscribe", "input_label/9", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/tags/child.marko_0_input_label#6/subscribers", 1);
const $global_label_key = /*@__PURE__*/ _global_key("label");
const $catch_content2__$global_label = /*@__PURE__*/ _global_closure($global_label_key, "__tests__/tags/child.marko_3_$global_label#0:13/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.label));
const $catch_content2__setup = ($scope) => {
	$catch_content2__input_label($scope);
	$catch_content2__$global_label($scope);
};
const $catch_content2__$params = ($scope, $params3) => _text($scope["#text/2"], $params3[0]?.message);
const $catch_content2 = _content("__tests__/tags/child.marko_3*content", "<b><!> <!> <!></b>", "D%c%c%", $catch_content2__setup, $catch_content2__$params);
const $try_content__input_early = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_2_input_early#0:7/subscribe", "input_early/10", ($scope) => _text($scope["#text/0"], $scope._.input_early ? boom("early") : "ok"));
const $try_content__setup = $try_content__input_early;
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_1_input_label#0:6/subscribe", "input_label/9", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/tags/child.marko_0_input_label#6/subscribers", 0);
const $catch_content__$global_label = /*@__PURE__*/ _global_closure($global_label_key, "__tests__/tags/child.marko_1_$global_label#0:13/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.label));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__$global_label($scope);
};
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]?.message);
const $catch_content = _content("__tests__/tags/child.marko_1*content", "<b><!> <!> <!></b>", "D%c%c%", $catch_content__setup, $catch_content__$params);
const $input_n = ($scope, input_n) => _text($scope["#text/0"], input_n);
const $try = /*@__PURE__*/ _try("#text/1", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/2", "<p> </p>", "D ", $try_content2__setup, 0, $catch_content2);
function $setup($scope) {
	$try($scope);
	$try2($scope);
}
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_label($scope, input.label);
	$input_early($scope, input.early);
	$input_late($scope, input.late);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label, $catch_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_early__closure = /*@__PURE__*/ _closure($try_content__input_early);
const $input_early = /*@__PURE__*/ _const("input_early", $input_early__closure);
const $input_late__closure = /*@__PURE__*/ _closure($try_content2__input_late);
const $input_late = /*@__PURE__*/ _const("input_late", $input_late__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
