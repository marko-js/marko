// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__w = ($scope, w) => _text($scope["#text/0"], w);
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading...");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<p> </p>", "D ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
	$try_content__await_promise2($scope, resolveAfter("sibling", 2));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
