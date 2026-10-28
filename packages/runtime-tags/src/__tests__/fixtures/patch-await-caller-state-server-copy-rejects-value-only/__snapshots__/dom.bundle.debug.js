// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $catch_content = _content("__tests__/tags/show-await.marko_2*content", "<em>caught</em>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_promise#0:3/init", /*@__PURE__*/ _closure_get("input_promise/4", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$try($scope);
}
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise$1 = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $p = /*@__PURE__*/ _let("p/5", ($scope) => $input_promise$1($scope["#childScope/1"], $scope.p));
const $input_promise = $p;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
