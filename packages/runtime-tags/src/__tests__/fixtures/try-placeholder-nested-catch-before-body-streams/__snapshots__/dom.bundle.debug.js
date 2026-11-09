// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content3__$params = ($scope, $params4) => _text($scope["#text/0"], $params4[0]);
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
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
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!>", "b%b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("a", 2));
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
