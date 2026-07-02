// template.marko
const $template = "<button id=inc>inc</button><button id=other>other</button><div>count: <!></div><div>other: <!></div><!><!>";
const $walks = " b bDb%lDb%l%c";
_enable_catch();
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING...", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "resolved: <!>", "b%b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.count)));
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$await_content($scope);
};
const $count__closure = /* @__PURE__ */ _closure($try_content__count);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/5", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__closure($scope);
	$count__script($scope);
});
const $other__script = _script("__tests__/template.marko_0_other", ($scope) => _on($scope["#button/1"], "click", function() {
	$other($scope, $scope.other + 1);
}));
const $other = /* @__PURE__ */ _let("other/6", ($scope) => {
	_text($scope["#text/3"], $scope.other);
	$other__script($scope);
});
const $try = /* @__PURE__ */ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$count($scope, 0);
	$other($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
