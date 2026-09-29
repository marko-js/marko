// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content3__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content3__$params = ($scope, $params4) => $await_content3__x($scope, $params4[0]);
const $await_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content2__$params = ($scope, $params3) => $await_content2__x($scope, $params3[0]);
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $placeholder_content3 = _content("__tests__/template.marko_6*content", "3 loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content3__setup = ($scope) => {
	$await_content($scope);
	$try_content3__await_promise($scope, resolveAfter("3", 2));
};
const $placeholder_content2 = _content("__tests__/template.marko_4*content", "2 loading");
const $try_content2__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content3);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<b> </b>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__try($scope);
	$try_content2__await_promise($scope, resolveAfter("2", 3));
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "1 loading");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content2__setup, $placeholder_content2);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "<div> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
const $try_content__setup = ($scope) => {
	$await_content3($scope);
	$try_content__try($scope);
	$try_content__await_promise($scope, resolveAfter("1", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
