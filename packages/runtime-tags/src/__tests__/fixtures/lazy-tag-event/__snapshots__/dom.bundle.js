// total: 188 (min) 125 (brotli)
// template.marko: 141 (min) 86 (brotli)
const $load_Child_trigger = /* @__PURE__ */ _load_event_trigger("click", ":is(body)");
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal($load_Child_trigger(() => import("./v:child.marko.input_value.mjs")));
let $load_Child_setup = /* @__PURE__ */ _load_setup(0, 1, $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));

// total: 168 (min) 120 (brotli)
// child.marko: 39 (min) 43 (brotli)
const $template = "<span> </span>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $setup__script = _script("a0", ($scope) => console.log("loaded"));
const $setup = $setup__script;

// total: 87 (min) 75 (brotli)
// v:child.marko.setup.js: 17 (min) 18 (brotli)
const _ = [
	$template,
	"D l",
	$setup
];
