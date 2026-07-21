// template.marko
const $template = "<div id=outside> </div><!><!>";
const $walks = "D l%c";
_enable_catch();
const $await_content__data = /*@__PURE__*/ _render(($scope, data) => _text($scope["#text/0"], JSON.stringify(data)));
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING...", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<pre> </pre>", "D l");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__id__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], $scope._.id));
const $try_content__id = /*@__PURE__*/ _closure_get("id", ($scope) => {
	$try_content__id__render($scope);
	$try_content__await_promise($scope, resolveAfter({ id: $scope._.id }, 4));
});
const $try_content__setup = ($scope) => {
	$try_content__id($scope);
	$await_content($scope);
};
const $id__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], $scope.id));
const $id__closure = /*@__PURE__*/ _closure($try_content__id);
const $id = /*@__PURE__*/ _let("id/2", ($scope) => {
	$id__render($scope);
	$id__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", "<h2>Id: <!></h2><!><!>", "Db%l%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => (async () => {
	await resolveAfter(0, 1);
	$id($scope, 2);
	await resolveAfter(0, 3);
	$id($scope, 3);
})());
function $setup($scope) {
	$id($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
