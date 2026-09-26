// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__inner = ($scope, inner) => _text($scope["#text/0"], inner);
const $await_content2__$params = ($scope, $params3) => $await_content2__inner($scope, $params3[0]);
const $await_content__outer = ($scope, outer) => _text($scope["#text/0"], outer);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<p> </p>", "D ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__await_promise($scope, resolveAfter("inner", 2));
};
const $await_content__$params = ($scope, $params2) => $await_content__outer($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading...");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
