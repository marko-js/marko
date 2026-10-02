// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params4) => $await_content2__b($scope, $params4[0]);
const $placeholder_content2__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("ERROR!");
})());
const $placeholder_content2 = _content("__tests__/template.marko_7*content", " ", " ", $placeholder_content2__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content3__setup = ($scope) => {
	$await_content2($scope);
	$try_content3__await_promise($scope, resolveAfter("b", 3));
};
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params3) => $await_content__a($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content2);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("a", 2));
	$try_content2__try($scope);
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content2__setup, 0, $catch_content);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
