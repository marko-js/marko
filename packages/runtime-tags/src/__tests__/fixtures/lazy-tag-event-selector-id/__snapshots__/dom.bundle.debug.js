// template.marko
const $template = "<!><!><!><button id=load>load</button>";
const $walks = "b%/&c";
const $load_Child_trigger = /* @__PURE__ */ _load_event_trigger("click", "#load");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
const $setup = $load_Child_setup;
const $input_value = ($scope, input_value) => $load_Child_tag_input_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("loaded"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
