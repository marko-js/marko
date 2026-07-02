// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<button id=inc>Inc</button><!><!><!>";
const $walks = " b%/&c";
const $load_Child_trigger = /* @__PURE__ */ _load_race_trigger(/* @__PURE__ */ _load_visible_trigger("body"), /* @__PURE__ */ _load_idle_trigger({ timeout: 100 }));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/1", "#childScope/2", /* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(/* @__PURE__ */ $load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
const $value = /* @__PURE__ */ _let("value/3", ($scope) => $load_Child_tag_input_value($scope["#childScope/2"], $scope.value));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
function $setup($scope) {
	$load_Child_setup($scope);
	$value($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
