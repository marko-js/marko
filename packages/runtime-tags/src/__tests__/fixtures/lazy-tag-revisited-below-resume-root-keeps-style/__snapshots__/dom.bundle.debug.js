// tags/resume-root.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $inputas_content = _content("__tests__/tags/resume-root.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputas_content);
const $input_as = $dynamicTag;
const $input = ($scope, input) => $input_as($scope, input.as);
var resume_root_default = /*@__PURE__*/ _template("__tests__/tags/resume-root.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><html><head><title>Revisit</title></head><body><!>${_w0}</body></html>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `bDbD%/&b/${_w0}&m`)("b%c");
let $load_LazyWrap_setup = /*@__PURE__*/ _load_setup(() => import("./v:lazy-wrap.marko.setup.mjs"));
function $setup($scope) {
	$load_LazyWrap_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$input_as($scope["#childScope/2"], "section");
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
