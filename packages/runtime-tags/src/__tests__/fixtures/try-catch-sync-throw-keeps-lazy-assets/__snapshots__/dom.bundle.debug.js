// child.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
function $setup($scope) {
	$input_id($scope["#childScope/0"], "lazy");
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// tags/log-effect.marko
const $template = "";
const $walks = "";
const $setup = () => {};
const $input_id__script = _script("__tests__/tags/log-effect.marko_0_input_id#2", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", $input_id__script);
const $input = ($scope, input) => $input_id($scope, input.id);
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div id=log></div><!>${_w0}<!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `b%/${_w0}&c`)("");
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	_text($scope["#text/2"], (() => {
		throw new Error("S");
	})());
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%/&b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$input_id($scope["#childScope/1"], "z");
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
