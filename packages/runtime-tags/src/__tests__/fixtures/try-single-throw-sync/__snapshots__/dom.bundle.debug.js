// template.marko
const $template = "Before<!>After";
const $walks = "b%c";
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content__err = ($scope, err) => $catch_content__err_message($scope, err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", " ", " b", 0, $catch_content__$params);
const $try_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("ERROR!");
})());
const $try = /* @__PURE__ */ _try("#text/0", "Inside<!>", "b%b", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
