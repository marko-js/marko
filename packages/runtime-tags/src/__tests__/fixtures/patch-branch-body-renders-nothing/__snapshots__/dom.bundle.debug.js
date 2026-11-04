// template.marko
const $template = "<!><!><!><!><!><!>";
const $walks = "b%b%b%b%c";
const $placeholder_content = _content_resume("__tests__/template.marko_6*content", "<em>loading</em>");
const $await_content2__input_n__script = _script_patch("__tests__/template.marko_5_input_n#0:7 >input_n", ($scope) => document.body.dataset.n = $scope._.input_n);
const $await_content2__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_5_input_n#0:7/subscribe", "input_n/8", $await_content2__input_n__script);
const $await_content2__setup = $await_content2__input_n;
const $for_content__for = /*@__PURE__*/ _for_to_unkeyed("#text/0");
const $for_content__setup = ($scope) => $for_content__for($scope, [$scope["#LoopKey"]]);
const $await_content = /*@__PURE__*/ _await_content("#text/0");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try = /*@__PURE__*/ _try("#text/1", 0, 0, 0, $placeholder_content);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$try($scope);
}
const $await_content2 = /*@__PURE__*/ _await_content("#text/3", 0, 0, $await_content2__setup);
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/3");
const $input_p = ($scope, input_p) => {
	$await_promise($scope, input_p);
	$await_promise2($scope, input_p);
};
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/2", "<!><!><!>", "b%", $for_content__setup);
const $input_n__closure = /*@__PURE__*/ _closure($await_content2__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", ($scope) => {
	$input_n__closure($scope);
	$for($scope, [$scope.input_n]);
});
const $input = ($scope, input) => {
	$input_p($scope, input.p);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
