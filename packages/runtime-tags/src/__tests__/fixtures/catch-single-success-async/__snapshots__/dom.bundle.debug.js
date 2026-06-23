// template.marko
const $template = "a<!>f<!>h";
const $walks = "b%c%c";
_enable_catch();
const $await_content2__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content2__$params = ($scope, $params4) => $await_content2__data($scope, $params4[0]);
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params3) => $await_content__data($scope, $params3[0]);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "ERROR!", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("c", 2));
};
const $try = /* @__PURE__ */ _try("#text/0", "b<!>d", "b%c", $try_content__setup);
const $await_content2 = /* @__PURE__ */ _await_content("#text/1", " ", " b");
const $await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content2($scope);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$await_promise($scope, resolveAfter("g", 1));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
