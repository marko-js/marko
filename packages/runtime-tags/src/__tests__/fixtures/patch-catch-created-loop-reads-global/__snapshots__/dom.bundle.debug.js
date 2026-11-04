// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $for_content__setup__$global_label = /*@__PURE__*/ _fill_global_for("__tests__/template.marko_3_$global_label#0:15", "#text/1", ($scope) => _text($scope["#text/1"], $scope.$global.label), "label");
const $for_content__setup = ($scope) => {
	$for_content__setup__$global_label($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $try_content__input_late = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_late#0:4/subscribe", "input_late/6", ($scope) => _text($scope["#text/0"], $scope._.input_late ? boom("late") : "ok"));
const $try_content__setup = $try_content__input_late;
const $catch_content__for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<i><!>:<!></i>", "D%c%", $for_content__setup);
const $catch_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_n#0:3/subscribe", "input_n/5", ($scope) => $catch_content__for($scope, [$scope._.input_n]), 0, "__tests__/template.marko_0_input_n#3/subscribers", 0);
const $catch_content__setup = $catch_content__input_n;
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => document.body.dataset.ready = "1");
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_late($scope, input.late);
};
const $input_n__closure = /*@__PURE__*/ _closure($catch_content__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__closure);
const $input_late__closure = /*@__PURE__*/ _closure($try_content__input_late);
const $input_late = /*@__PURE__*/ _const("input_late", $input_late__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
