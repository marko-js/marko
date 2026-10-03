// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div id=log></div>${_w0}<!>${_w1}<!><!>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&b%/&/${_w1}&b%/&c`)("", "");
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Awaiter_setup = /*@__PURE__*/ _load_setup(() => import("./v:awaiter.marko.setup.mjs"));
function $setup($scope) {
	$input_id($scope["#childScope/0"], "page");
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$input_id($scope["#childScope/3"], "page-after");
	$load_Awaiter_setup($scope, $scope["#childScope/5"], $scope["#text/4"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// awaiter.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}<!>${_w1}<!>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&b%/${_w1}&c`)("", "");
const $await_content__v = ($scope, v) => $input_id($scope["#childScope/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "", /*@__PURE__*/ ((_w0) => `/${_w0}&`)(""));
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
function $setup($scope) {
	$input_id($scope["#childScope/0"], "before-await");
	$await_content($scope);
	$input_id($scope["#childScope/2"], "after-await");
	$await_promise($scope, resolveAfter("in-await", 1));
}
var awaiter_default = /*@__PURE__*/ _template("__tests__/awaiter.marko", $template, $walks, $setup);

// child.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}<!>${_w1}<!>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&b%/&/${_w1}&c`)("", "");
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(() => import("./v:grand-child.marko.setup.mjs"));
function $setup($scope) {
	$input_id($scope["#childScope/0"], "child");
	$load_GrandChild_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$input_id($scope["#childScope/3"], "child-after");
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// grand-child.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
function $setup($scope) {
	$input_id($scope["#childScope/0"], "grand-child");
}
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, $walks, $setup);

// tags/log-effect.marko
const $template = "";
const $walks = "";
const $setup = () => {};
const $input_id__script = _script("__tests__/tags/log-effect.marko_0_input_id#2", ($scope) => document.getElementById("log").textContent += "[" + $scope.input_id + "]");
const $input_id = /*@__PURE__*/ _const("input_id", $input_id__script);
const $input = ($scope, input) => $input_id($scope, input.id);
var log_effect_default = /*@__PURE__*/ _template("__tests__/tags/log-effect.marko", "", "", 0, $input);

// v:awaiter.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
