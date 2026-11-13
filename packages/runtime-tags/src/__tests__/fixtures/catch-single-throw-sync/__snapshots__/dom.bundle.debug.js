// template.marko
const $template = "a<!>d";
const $walks = "b%c";
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__$params);
const $try_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("ERROR!");
})());
const $try = /*@__PURE__*/ _try("#text/0", "b<!>", "b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
