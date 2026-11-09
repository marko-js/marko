// template.marko
const $template = "a<!>g<!>m";
const $walks = "b%c%c";
const $await_content6__$params = ($scope, $params7) => _text($scope["#text/0"], $params7[0]);
const $await_content6 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_content5__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content6__$params);
const $await_content5__setup = ($scope) => {
	$await_content6($scope);
	$await_content5__await_promise($scope, resolveAfter("j", 3));
};
const $await_content5__$params = ($scope, $params6) => _text($scope["#text/0"], $params6[0]);
const $await_content5 = /*@__PURE__*/ _await_content("#text/1", "<!><!>k", "%b%", $await_content5__setup);
const $await_content4__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content5__$params);
const $await_content4__setup = ($scope) => {
	$await_content5($scope);
	$await_content4__await_promise($scope, resolveAfter("i", 2));
};
const $await_content4__$params = ($scope, $params5) => _text($scope["#text/0"], $params5[0]);
const $await_content3__$params = ($scope, $params4) => _text($scope["#text/0"], $params4[0]);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_content2__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
const $await_content2__setup = ($scope) => {
	$await_content3($scope);
	$await_content2__await_promise($scope, resolveAfter("d", 3));
};
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<!><!>e", "%b%", $await_content2__setup);
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__await_promise($scope, resolveAfter("c", 2));
};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!>f", "%b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content4 = /*@__PURE__*/ _await_content("#text/1", "<!><!>l", "%b%", $await_content4__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content4__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content4($scope);
	$await_promise($scope, resolveAfter("b", 1));
	$await_promise2($scope, resolveAfter("h", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
