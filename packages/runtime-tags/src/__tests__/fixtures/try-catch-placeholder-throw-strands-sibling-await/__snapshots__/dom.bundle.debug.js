// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const never = new Promise(() => {});
const $placeholder_content2__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("ERROR!");
})());
const $placeholder_content2 = _content("__tests__/template.marko_9*content", " ", " ", $placeholder_content2__setup);
const $await_content4 = /*@__PURE__*/ _await_content("#text/0", "body");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content3__setup = ($scope) => {
	$await_content4($scope);
	$try_content3__await_promise($scope, resolveAfter("body", 3));
};
const $await_content3__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content2);
const $await_content3__setup = ($scope) => $await_content3__try($scope);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "never");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content3__setup);
const $try_content2__await_promise2 = /*@__PURE__*/ _await_promise("#text/1");
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$await_content3($scope);
	$try_content2__await_promise($scope, never);
	$try_content2__await_promise2($scope, resolveAfter("inner", 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content2__setup, 0, $catch_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
