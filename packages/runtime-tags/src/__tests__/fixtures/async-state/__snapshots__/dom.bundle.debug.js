// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
_enable_catch();
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING...", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__clickCount = /* @__PURE__ */ _closure_get("clickCount", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.clickCount)));
const $try_content__setup = ($scope) => {
	$try_content__clickCount($scope);
	$await_content($scope);
};
const $clickCount__closure = /* @__PURE__ */ _closure($try_content__clickCount);
const $clickCount__script = _script("__tests__/template.marko_0_clickCount", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope, $scope.clickCount + 1);
}));
const $clickCount = /* @__PURE__ */ _let("clickCount/2", ($scope) => {
	$clickCount__closure($scope);
	$clickCount__script($scope);
});
const $try = /* @__PURE__ */ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$clickCount($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
