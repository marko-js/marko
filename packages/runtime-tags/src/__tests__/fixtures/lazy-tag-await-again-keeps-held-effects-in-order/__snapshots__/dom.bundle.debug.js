// template.marko
const $template = "<div id=log></div><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/log-effect.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_id__script = _script("__tests__/tags/log-effect.marko_0_input_id#2", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", $input_id__script);
const $input = ($scope, input) => $input_id($scope, input.id);
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", 0, $input);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__second = ($scope, second) => $input_id($scope["#childScope/0"], second);
const $await_content2__$params = ($scope, $params4) => $await_content2__second($scope, $params4[0]);
const $await_content__first = ($scope, first) => $input_id($scope["#childScope/0"], first);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""));
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__await_promise($scope, resolveAfter("c", 2));
};
const $await_content__$params = ($scope, $params3) => $await_content__first($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/child.marko_2*content", " ", " ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&b%c`)(""), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__setup = ($scope) => {
	$input_id($scope["#childScope/0"], "a");
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("b", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&b%c`)(""), $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
