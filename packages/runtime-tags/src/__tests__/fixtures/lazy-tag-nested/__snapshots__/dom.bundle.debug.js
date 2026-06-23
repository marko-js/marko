// child.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:grand-child.marko.input_value.mjs"));
const $setup = $load_GrandChild_setup;
const $input_value = ($scope, input_value) => $load_GrandChild_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// grand-child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/grand-child.marko_0", ($scope) => console.log("loaded"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var grand_child_default = /* @__PURE__ */ _template("__tests__/grand-child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $setup = $load_Child_setup;
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
