// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__d = ($scope, d) => _text($scope["#text/0"], d);
const $await_content2__$params = ($scope, $params4) => $await_content2__d($scope, $params4[0]);
const $placeholder_content = _content("__tests__/template.marko_5*content", "loading");
const $try_content2__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("ERROR!");
})());
const $await_content__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content2__setup, $placeholder_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><p>dead</p>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("b", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content2($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("d", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
