// template.marko
const $template = "a<!>c<!>e";
const $walks = "b%c%c";
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " b");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " b");
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$await_promise($scope, resolveAfter("b", 1));
	$await_promise2($scope, resolveAfter("d", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
