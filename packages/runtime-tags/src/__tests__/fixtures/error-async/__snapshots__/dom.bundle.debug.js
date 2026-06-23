// template.marko
const $template = "a<!>b";
const $walks = "b%c";
const $await_content = /* @__PURE__ */ _await_content("#text/0", "failed", "b");
const $await_promise = /* @__PURE__ */ _await_promise("#text/0");
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
