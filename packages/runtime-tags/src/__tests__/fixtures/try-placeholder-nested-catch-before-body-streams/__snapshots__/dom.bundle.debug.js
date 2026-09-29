// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content3__y = ($scope, y) => _text($scope["#text/0"], y);
const $await_content3__$params = ($scope, $params4) => $await_content3__y($scope, $params4[0]);
const $await_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content2__$params = ($scope, $params3) => $await_content2__x($scope, $params3[0]);
const $catch_content = _content("__tests__/template.marko_5*content", "caught");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("inner"), 1));
};
const $placeholder_content = _content("__tests__/template.marko_3*content", "outer loading");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "<div> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
const $try_content__setup = ($scope) => {
	$await_content3($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 3));
};
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!>", "b%b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("a", 2));
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
