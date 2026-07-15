// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " b");
const $placeholder_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $placeholder_content__setup = ($scope) => {
	$await_content($scope);
	$placeholder_content__await_promise($scope, resolveAfter("placeholder", 2));
};
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $placeholder_content__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("content", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
