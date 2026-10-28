// tags/echo.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_value_length = ($scope, input_value_length) => _text($scope["#text/0"], input_value_length);
const $input$2 = ($scope, input) => $input_value($scope, input.value);
const $input_value = ($scope, input_value) => $input_value_length($scope, input_value?.length);
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo.marko", $template$2, "D l", 0, $input$2);

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_label__OR__x = /*@__PURE__*/ _or_resume("__tests__/tags/show-await.marko_1_input_label#0:4_x#8/init", 9, ($scope) => _text($scope["#text/4"], $scope._.input_label + $scope.x));
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => {
	_text($scope["#text/1"], $scope._.input_label);
	$await_content__input_label__OR__x($scope);
}, 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__setup = $await_content__input_label;
const $await_content__upper = ($scope, upper) => _text($scope["#text/3"], upper);
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_attr($scope["#p/0"], "title", $scope.x);
	_text($scope["#text/2"], $scope.x);
	$input_value($scope["#childScope/6"], $scope.x);
	$await_content__x_length($scope, $scope.x?.length);
	$await_content__upper($scope, $scope.x.toUpperCase());
	$await_content__input_label__OR__x($scope);
});
const $await_content__if = /*@__PURE__*/ _if("#text/5", "<em>long</em>");
const $await_content__x_length = ($scope, x_length) => $await_content__if($scope, x_length > 6 ? 0 : 1);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<p><!>:<!>:<!>:<!></p><!>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => ` D%c%c%c%l%b/${_w0}&`)("D l"), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
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
