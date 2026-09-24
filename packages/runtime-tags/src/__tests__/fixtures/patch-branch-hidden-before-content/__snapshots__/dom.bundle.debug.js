// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button>Count <!></button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& Db%m`)("D%l");
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $wrap_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $wrap_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $wrap_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_2_input_promise#7/subscribe");
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_promise($scope);
	$await_content($scope);
};
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $wrap_content__setup);
const $if_content__input_error = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_error));
const $if_content__setup = $if_content__input_error;
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/1"], $wrap_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p class=error> </p>", "D ", $if_content__setup);
const $input_error = /*@__PURE__*/ _const("input_error", ($scope) => {
	$if_content__input_error($scope);
	$if($scope, $scope.input_error ? 0 : 1);
});
const $input = ($scope, input) => {
	$input_error($scope, input.error);
	$input_promise($scope, input.promise);
};
const $input_promise__closure = /*@__PURE__*/ _closure($wrap_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
