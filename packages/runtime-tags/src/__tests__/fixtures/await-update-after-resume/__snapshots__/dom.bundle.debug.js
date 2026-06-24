// template.marko
const $template = "<div id=outside> </div><!><!>";
const $walks = "D l%c";
_enable_catch();
const $await_content__value__script = _script("__tests__/template.marko_3_value", ($scope) => console.log(`effect ran value=${$scope.value}`));
const $await_content__value = /*@__PURE__*/ _const("value", ($scope) => {
	_text($scope["#text/0"], $scope.value);
	$await_content__value__script($scope);
});
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => console.log(`setup effect ran`));
const $await_content__setup = $await_content__setup__script;
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading...", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=inside> </div>", "D l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__value = /*@__PURE__*/ _closure_get("value", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.value)));
const $try_content__setup = ($scope) => {
	$try_content__value($scope);
	$await_content($scope);
};
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	_text($scope["#text/0"], $scope.value);
	$value__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => (async () => {
	await resolveAfter(0, 2);
	$value($scope, 1);
})());
function $setup($scope) {
	$value($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
