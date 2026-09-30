// child.marko
const $template = "<span>child</span>";
const $walks = "b";
const $setup__script = _script("__tests__/child.marko_0", ($scope) => document.getElementById("log").textContent += "[lazy]");
const $setup = $setup__script;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// tags/log-effect.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_id__script = _script("__tests__/tags/log-effect.marko_0_input_id#2", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", $input_id__script);
const $input = ($scope, input) => $input_id($scope, input.id);
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div id=log></div>${_w0}<!>${_w1}<!>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&b%/${_w1}&c`)("", "");
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $placeholder_content__setup = ($scope) => $input_id($scope["#childScope/0"], "placeholder");
const $placeholder_content = _content("__tests__/template.marko_4*content", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""), $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 3));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__$params);
const $try_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/3", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content2($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!><!>", "b%/&b%b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$input_id($scope["#childScope/0"], "before");
	$input_id($scope["#childScope/2"], "after");
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
