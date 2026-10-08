// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><html><head><title>Revisit</title></head><body><!>${_w0}</body></html>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `bDbD%/&b/${_w0}&m`)("b");
let $load_LazyWrap_setup = /*@__PURE__*/ _load_setup(() => import("./v:lazy-wrap.marko.setup.mjs"));
function $setup($scope) {
	$load_LazyWrap_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/lazy-wrap.marko
const $template = /*@__PURE__*/ ((_w0) => `<div class=lazy>${_w0}</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b");
const $setup = () => {};
var lazy_wrap_default = /*@__PURE__*/ _template("__tests__/tags/lazy-wrap.marko", $template, $walks);

// tags/shared.marko
const $template = "<span class=shared>Shared</span>";
const $walks = "b";
const $setup = () => {};
var shared_default = /*@__PURE__*/ _template("__tests__/tags/shared.marko", $template, "b");

// tags/v:lazy-wrap.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// tags/v:shared.marko.css
var v_shared_marko_default = "\n  .shared { color: green }\n";
