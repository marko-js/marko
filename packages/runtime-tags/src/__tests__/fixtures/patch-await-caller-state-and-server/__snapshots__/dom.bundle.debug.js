// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__setup = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button class=open>inc</button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $n = /*@__PURE__*/ _let("n/7", ($scope) => $input_promise($scope["#childScope/1"], Promise.resolve($scope.n)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup$1($scope["#childScope/2"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => {
	$input_label$1($scope["#childScope/1"], input_label);
	$input_label$1($scope["#childScope/2"], input_label);
};
const $input_value = ($scope, input_value) => $input_promise($scope["#childScope/2"], Promise.resolve(input_value));
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
