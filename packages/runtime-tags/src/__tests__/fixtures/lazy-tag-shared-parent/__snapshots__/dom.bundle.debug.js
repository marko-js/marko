// tags/parent-a.marko
const $template$2 = "<!><!><!><!>";
const $walks$2 = "b%/&c";
let $load_Child_setup$1 = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value$1 = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $setup$2 = $load_Child_setup$1;
const $input_value$1 = ($scope, input_value) => $load_Child_tag_input_value$1($scope["#childScope/1"], input_value);
const $input$1 = ($scope, input) => $input_value$1($scope, input.value);
var parent_a_default = /* @__PURE__ */ _template("__tests__/tags/parent-a.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/parent-b.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $setup$1 = $load_Child_setup;
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value * 2);
const $input = ($scope, input) => $input_value($scope, input.value);
var parent_b_default = /* @__PURE__ */ _template("__tests__/tags/parent-b.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `<button>Inc</button>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => ` b/${_w0}&/${_w1}&b`)($walks$2, $walks$1);
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	$input_value$1($scope["#childScope/1"], $scope.value);
	$input_value($scope["#childScope/2"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$setup$2($scope["#childScope/1"]);
	$setup$1($scope["#childScope/2"]);
	$value($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => console.log("loaded"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template, "D l", $setup, $input);

// tags/v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
