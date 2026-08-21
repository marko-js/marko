// inert-a.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%/&c";
const $load_LazyPart_trigger = /*@__PURE__*/ _load_visible_trigger("body");
let $load_LazyPart_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_LazyPart_trigger(() => import("./v:lazy-part.marko.setup.mjs")));
const $setup$2 = $load_LazyPart_setup;
var inert_a_default = /*@__PURE__*/ _template("__tests__/inert-a.marko", $template$2, $walks$2, $setup$2);

// inert-b.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$3);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$3);
function $setup$1($scope) {
	$setup$3($scope["#childScope/0"]);
}
var inert_b_default = /*@__PURE__*/ _template("__tests__/inert-b.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($walks$2, $walks$1);
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// lazy-part.marko
const $template = /*@__PURE__*/ ((_w0) => `<div class=lazy>${_w0}</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var lazy_part_default = /*@__PURE__*/ _template("__tests__/lazy-part.marko", $template, $walks, $setup);

// shared.marko
const $template = "<button class=shared>shared:<!></button>";
const $walks = " Db%l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/shared.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var shared_default = /*@__PURE__*/ _template("__tests__/shared.marko", $template, $walks, $setup);

// v:lazy-part.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
