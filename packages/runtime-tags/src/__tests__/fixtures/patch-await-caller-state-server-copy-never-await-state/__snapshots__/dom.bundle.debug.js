// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content2__y = ($scope, y) => _text($scope["#text/0"], y);
const $await_content2__$params = ($scope, $params3) => $await_content2__y($scope, $params3[0]);
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__n = /*@__PURE__*/ _fill_let("__tests__/tags/show-await.marko_fill0", "n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $await_content2 = _resumed["__tests__/tags/show-await.marko_1_#text#3/init"] = /*@__PURE__*/ _await_content("#text/3", "<b> </b>", "D ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/3", $await_content2__$params);
const $await_content__q = /*@__PURE__*/ _fill_let("__tests__/tags/show-await.marko_fill1", "q/7", ($scope) => $await_content__await_promise($scope, $scope.q));
const $await_content__setup__script = _script("__tests__/tags/show-await.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$await_content__n($scope, +$scope.n + 1);
	$await_content__q($scope, Promise.resolve("m"));
}));
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__n($scope, 0);
	$await_content__q($scope, Promise.resolve("k"));
	$await_content__setup__script($scope);
};
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><button class=q> </button><!><!>", "D l D l%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
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
