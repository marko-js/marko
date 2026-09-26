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
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $wrap_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $wrap_content__input_promise = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_promise", /*@__PURE__*/ _closure_get("input_promise", ($scope) => $wrap_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#3/subscribe"), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_promise($scope);
	$await_content($scope);
};
const $wrap_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrap_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($wrap_content__input_promise);
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
