// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const never = new Promise(() => {});
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_5_content", "caught: <!>", "b%b", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "slow sibling", "b");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "never", "b");
const $try_content2__await_promise2 = /*@__PURE__*/ _await_promise("#text/1");
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$await_content3($scope);
	$try_content2__await_promise($scope, never);
	$try_content2__await_promise2($scope, rejectAfter(new Error("ERROR!"), 2));
};
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading outer...", "b");
const $await_content__changes = /*@__PURE__*/ _closure_get("changes", ($scope) => _text($scope["#text/2"], $scope._._.changes), ($scope) => $scope._._, "__tests__/template.marko_2_changes/pending");
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%c", $try_content2__setup);
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#div/1"], "change", function() {
	$changes($scope._._, $scope._._.changes + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__changes($scope);
	$await_content__try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><div>changes: <!></div>", "b%b Db%l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $changes__closure = /*@__PURE__*/ _closure($await_content__changes);
const $changes = /*@__PURE__*/ _let("changes/1", $changes__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$changes($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
