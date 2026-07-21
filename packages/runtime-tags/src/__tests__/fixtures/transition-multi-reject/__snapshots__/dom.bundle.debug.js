// template.marko
const $template = "<button id=inc>inc</button><div>count: <!></div><!><!><!>";
const $walks = " bDb%l%b%c";
_enable_catch();
const $await_content2__b = /*@__PURE__*/ _render(($scope, b) => _text($scope["#text/0"], b));
const $await_content2__$params = ($scope, $params4) => $await_content2__b($scope, $params4[0]);
const $placeholder_content2 = _content_resume("__tests__/template.marko_6_content", "LOADING B...", "b");
const $await_content__a = /*@__PURE__*/ _render(($scope, a) => _text($scope["#text/0"], a));
const $await_content__$params = ($scope, $params3) => $await_content__a($scope, $params3[0]);
const $catch_content__err_message = /*@__PURE__*/ _render(($scope, err_message) => _text($scope["#text/0"], err_message));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_4_content", "error: <!>", "b%b", 0, $catch_content__$params);
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
const $try_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content__await_promise($scope, $scope._.count ? rejectAfter(new Error("BOOM")) : resolveAfter($scope._.count)));
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
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
	$try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
