// template.marko
const $template = "<button id=inc>inc</button><div>count: <!></div><!><!><!>";
const $walks = " bDb%l%b%c";
_enable_catch();
const $await_content2__b = /*@__PURE__*/ _render(($scope, b) => _text($scope["#text/0"], b));
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $placeholder_content2 = _content_resume("__tests__/template.marko_5_content", "LOADING B...", "b");
const $await_content__a = /*@__PURE__*/ _render(($scope, a) => _text($scope["#text/0"], a));
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "LOADING A...", "b");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "b: <!>", "b%b");
_enable_transition();
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content2__await_promise($scope, resolveAfter($scope._.count * 10, 2)));
const $try_content2__setup = ($scope) => {
	$try_content2__count($scope);
	$await_content2($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "a: <!>", "b%b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.count)));
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$await_content($scope);
};
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.count));
const $count__closure = /*@__PURE__*/ _closure($try_content__count, $try_content2__count);
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	$count__render($scope);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content2__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
