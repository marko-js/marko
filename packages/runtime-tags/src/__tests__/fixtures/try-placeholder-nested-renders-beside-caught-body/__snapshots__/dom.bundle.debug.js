// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content3__$params = ($scope, $params5) => _text($scope["#text/0"], $params5[0]);
const $catch_content__$params = ($scope, $params4) => _text($scope["#text/0"], $params4[0]?.message);
const $catch_content = _content("__tests__/template.marko_8*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $try_content3__setup = ($scope) => {
	$await_content3($scope);
	$try_content3__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $placeholder_content2 = _content("__tests__/template.marko_5*content", "loading inner");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2);
const $await_content__setup = $await_content__try;
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading outer");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "%b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content3__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
	$try2($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
