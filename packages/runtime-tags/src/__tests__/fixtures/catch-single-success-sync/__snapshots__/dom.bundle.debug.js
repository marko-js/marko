// template.marko
const $template = "a<!>c";
const $walks = "b%c";
const $catch_content = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "ERROR!", "b");
const $try = /* @__PURE__ */ _try("#text/0", "b", "b");
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
