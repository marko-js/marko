// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $placeholder_content2 = _content_resume("__tests__/template.marko_6_content", "loading inner...", "b");
const $placeholder_content = _content_resume("__tests__/template.marko_5_content", "loading outer...", "b");
const $await_content2__changes = /*@__PURE__*/ _closure_get("changes", ($scope) => _text($scope["#text/1"], $scope._._._._.changes), ($scope) => $scope._._._._, "__tests__/template.marko_4_changes/pending");
const $await_content2__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#div/0"], "change", function() {
	$changes($scope._._._._, $scope._._._._.changes + 1);
}));
const $await_content2__setup = ($scope) => {
	$await_content2__changes($scope);
	$await_content2__setup__script($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<div>changes: <!></div>", " Db%l", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content2__setup);
const $await_content__setup = ($scope) => $await_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $changes__closure = /*@__PURE__*/ _closure($await_content2__changes);
const $changes = /*@__PURE__*/ _let("changes/1", $changes__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$changes($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
