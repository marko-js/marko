// template.marko
const $template = "a<!>c";
const $walks = "b%c";
const $catch_content = _content("__tests__/template.marko_2*content", "ERROR!");
const $try = /*@__PURE__*/ _try("#text/0", "b", 0, 0, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
