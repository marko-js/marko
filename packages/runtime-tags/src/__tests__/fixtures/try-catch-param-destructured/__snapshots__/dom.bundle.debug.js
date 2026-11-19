// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__$params = ($scope, value) => _text($scope["#text/0"], value);
const $catch_content__$params = ($scope, $temp) => _text($scope["#text/0"], $temp.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("boom")));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
