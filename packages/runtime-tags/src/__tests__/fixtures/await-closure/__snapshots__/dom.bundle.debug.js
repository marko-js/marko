// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading...", "b");
const $await_content__value = /* @__PURE__ */ _closure_get("value", ($scope) => _text($scope["#text/0"], $scope._._.value), ($scope) => $scope._._, "__tests__/template.marko_2_value/pending");
const $await_content__setup = $await_content__value;
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<span> </span>", "D l", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 4));
};
const $value__closure = /* @__PURE__ */ _closure($await_content__value);
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	_text($scope["#text/1"], $scope.value);
	$value__closure($scope);
});
const $try = /* @__PURE__ */ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, $scope.value + 1);
}));
function $setup($scope) {
	$value($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
