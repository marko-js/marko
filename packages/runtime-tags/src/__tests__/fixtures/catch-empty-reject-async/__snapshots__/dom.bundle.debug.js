// template.marko
const $template = "a<!>d";
const $walks = "b%c";
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /* @__PURE__ */ _try("#text/0", "b<!>c", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({}) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
