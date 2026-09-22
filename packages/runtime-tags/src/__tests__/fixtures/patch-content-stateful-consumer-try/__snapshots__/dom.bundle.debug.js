// tags/wrap.marko
const $template$1 = "<button>toggle</button><div><!></div><!><!>";
const $walks$1 = " bD%l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko0", "input_content", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/2", "<section><!></section>", "D%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/wrap.marko1", "open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/wrap.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko0", "input_content", ($scope) => {
	$dynamicTag($scope, $scope.input_content);
	$if_content__input_content($scope);
});
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_fail__OR__input_x = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], check($scope._._.input_fail, $scope._._.input_x)));
const $try_content__input_fail = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_fail", /*@__PURE__*/ _closure_get("input_fail", $try_content__input_fail__OR__input_x, ($scope) => $scope._._), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_fail($scope);
	$try_content__input_x($scope);
};
const $try_content__input_x = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_x", /*@__PURE__*/ _closure_get("input_x", $try_content__input_fail__OR__input_x, ($scope) => $scope._._), 0);
const $wrap_content__try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup);
const $wrap_content__setup = ($scope) => $wrap_content__try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
const $wrap_content = _content_resume("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrap_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input = ($scope, input) => {
	$input_fail($scope, input.fail);
	$input_x($scope, input.x);
};
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_fail", $input_fail__closure);
const $input_x__closure = /*@__PURE__*/ _closure($try_content__input_x);
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
