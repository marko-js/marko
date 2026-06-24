// template.marko
const $template = "a<!>c<!>e";
const $walks = "b%c%c";
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "_A_", "b");
const $try = /* @__PURE__ */ _try("#text/0", "b", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/1", " ", " b");
const $await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$await_promise($scope, resolveAfter("d", 1));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
