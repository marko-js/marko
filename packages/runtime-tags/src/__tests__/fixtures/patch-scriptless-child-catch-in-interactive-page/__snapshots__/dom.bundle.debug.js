// tags/card/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/card/index.marko_2*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/tags/card/index.marko_1_input_promise#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup$1($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise$1 = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=inc> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_promise = ($scope, input_promise) => $input_promise$1($scope["#childScope/2"], input_promise);
const $input = ($scope, input) => $input_promise($scope, input.promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
