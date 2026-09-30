// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $try_content2__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("ERROR!");
})());
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content2__setup, $placeholder_content);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
