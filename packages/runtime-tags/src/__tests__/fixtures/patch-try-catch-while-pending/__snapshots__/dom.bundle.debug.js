// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content__$global_name = /*@__PURE__*/ _closure_get("$global_name/2", ($scope) => _text($scope["#text/0"], $scope.$global.name), ($scope) => $scope._._);
const $await_content__setup = $await_content__$global_name;
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $catch_content = _content("__tests__/template.marko_3*content", "<s>caught</s>");
const $placeholder_content = _content("__tests__/template.marko_2*content", "<i>loading</i>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!> <!></em>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__$global_promise = /*@__PURE__*/ _closure_get("$global_promise/1", ($scope) => $try_content__await_promise($scope, $scope.$global.promise));
const $try_content__setup = ($scope) => {
	$try_content__$global_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
const $global_promise__closure = /*@__PURE__*/ _closure($try_content__$global_promise);
const $global_promise = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_promise#7/subscribe", $global_promise__closure, "promise");
const $global_name__closure = /*@__PURE__*/ _closure($await_content__$global_name);
const $global_name = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_name#9/subscribe", $global_name__closure, "name");
function $setup($scope) {
	$try($scope);
	$global_promise($scope);
	$global_name($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup);
