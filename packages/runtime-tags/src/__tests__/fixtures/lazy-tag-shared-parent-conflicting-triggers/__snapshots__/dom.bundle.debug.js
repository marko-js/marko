// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => console.log("loaded"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, "D l", $setup, $input);

// tags/parent-a.marko
const $template$2 = "<!><!><!><!>";
const $walks$2 = "b%/&c";
const $load_Child_trigger$1 = /*@__PURE__*/ _load_visible_trigger("body");
let $load_Child_setup$1 = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger$1(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value$1 = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger$1(() => import("./v:child.marko.input_value.mjs")));
function $setup$2($scope) {
	$load_Child_setup$1($scope);
	$load_Child_tag_input_value$1($scope["#childScope/1"], 1);
}
var parent_a_default = /*@__PURE__*/ _template("__tests__/tags/parent-a.marko", $template$2, $walks$2, $setup$2);

// tags/parent-b.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%/&c";
const $load_Child_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
function $setup$1($scope) {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope["#childScope/1"], 2);
}
var parent_b_default = /*@__PURE__*/ _template("__tests__/tags/parent-b.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($walks$2, $walks$1);
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
