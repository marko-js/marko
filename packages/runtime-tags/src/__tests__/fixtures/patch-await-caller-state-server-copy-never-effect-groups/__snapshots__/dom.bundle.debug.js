// tags/show-await.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $await_content__x__script = _script("__tests__/tags/show-await.marko_2_x#2", ($scope) => document.body.dataset.v = String($scope.x));
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$await_content__x__script($scope);
});
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $Row_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Row_content__input_promise__OR__text = /*@__PURE__*/ _fill_signal("input_promise | __tests__/tags/show-await.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/tags/show-await.marko_1_input_promise#0:3_text#3/init", 4, ($scope) => $Row_content__await_promise($scope, $scope.text && $scope._.input_promise)));
const $Row_content__input_promise = /*@__PURE__*/ _closure_get("input_promise/5", $Row_content__input_promise__OR__text, 0, "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe");
const $Row_content__setup = ($scope) => {
	$Row_content__input_promise($scope);
	$await_content($scope);
};
const $Row_content__text = /*@__PURE__*/ _const("text", $Row_content__input_promise__OR__text);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__text($scope, $temp.text);
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
}
const $input_label$1 = ($scope, input_label) => $Row_content__text($scope["#childScope/0"], input_label);
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_promise__closure = /*@__PURE__*/ _closure($Row_content__input_promise);
const $input_promise$1 = /*@__PURE__*/ _fill_const("__tests__/tags/show-await.marko_fill0", "input_promise", $input_promise__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $p = /*@__PURE__*/ _let("p/6", ($scope) => $input_promise$1($scope["#childScope/1"], $scope.p));
const $input_promise = $p;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/1"], input_label);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
