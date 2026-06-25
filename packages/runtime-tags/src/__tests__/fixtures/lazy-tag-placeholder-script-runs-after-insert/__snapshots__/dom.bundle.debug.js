// child.marko
const $template = "<span class=child> </span>";
const $walks = " D l";
const $input_value = ($scope, input_value) => _text($scope["#text/1"], input_value);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("try-lazy child connected:", _el_read($scope["#span/0"]).isConnected));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:child.marko.input_value.mjs"));
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading...", "b");
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope);
	$load_Child_tag_input_value($scope["#childScope/1"], "hi");
};
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!><!>", "b%/&c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
