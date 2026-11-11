// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
const $await_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $placeholder_content__$label = ($scope, $label) => _text($scope["#text/0"], void 0 !== $label ? $label : "loading");
const $placeholder_content__$params = ($scope, $params2) => $placeholder_content__$label($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", " ", " ", 0, $placeholder_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__value = /*@__PURE__*/ _closure_get("value/3", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.value)), 0, "__tests__/template.marko_1_value#0:2/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__value($scope);
	$await_content($scope);
};
const $value__closure = /*@__PURE__*/ _closure($try_content__value);
const $value = /*@__PURE__*/ _let("value/2", $value__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, "b");
}));
function $setup($scope) {
	$value($scope, "a");
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
