// template.marko
const $template = "<button>inc</button><ul></ul><!><!>";
const $walks = " b b%c";
_enable_catch();
const $await_content__value = /*@__PURE__*/ _render(($scope, value) => _text($scope["#text/0"], value));
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "LOADING...", "b");
const $for_content__i = /*@__PURE__*/ _render(($scope, i) => _text($scope["#text/0"], i));
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "resolved: <!>", "b%b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.count)));
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$await_content($scope);
};
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li> </li>", "D l", 0, $for_content__$params);
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	$for($scope, [[...Array($scope.count).keys()]]);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
