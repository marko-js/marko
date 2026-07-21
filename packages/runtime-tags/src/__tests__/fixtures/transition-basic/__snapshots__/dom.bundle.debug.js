// template.marko
const $template = "<button id=inc>inc</button><button id=other>other</button><div>count: <!></div><div>other: <!></div><!><!>";
const $walks = " b bDb%lDb%l%c";
_enable_catch();
const $await_content__value = /*@__PURE__*/ _render(($scope, value) => _text($scope["#text/0"], value));
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING...", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "resolved: <!>", "b%b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.count)));
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$await_content($scope);
};
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], $scope.count));
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	$count__render($scope);
	$count__closure($scope);
});
const $other = /*@__PURE__*/ _let("other/6", /*@__PURE__*/ _render(($scope) => _text($scope["#text/3"], $scope.other)));
const $try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$other($scope, $scope.other + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$other($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
