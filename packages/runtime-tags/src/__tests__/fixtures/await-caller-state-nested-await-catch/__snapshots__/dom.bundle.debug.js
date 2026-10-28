// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $catch_content = _content("__tests__/tags/show-await.marko_4*content", "<span>caught</span>");
const $await_content2__x = /*@__PURE__*/ _closure_get("x/6", ($scope) => _text($scope["#text/0"], $scope._._.x), ($scope) => $scope._._, "__tests__/tags/show-await.marko_3_x#1:3/subscribe");
const $await_content2__setup = $await_content2__x;
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ", $await_content2__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_other = /*@__PURE__*/ _closure_get("input_other/5", ($scope) => $try_content__await_promise($scope, $scope._._.input_other), ($scope) => $scope._._, "__tests__/tags/show-await.marko_2_input_other#0:4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_other($scope);
	$await_content2($scope);
};
const $await_content__x__closure = /*@__PURE__*/ _closure($await_content2__x);
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$await_content__x__closure($scope);
});
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_other$1($scope, input.other);
};
const $input_other__closure = /*@__PURE__*/ _closure($try_content__input_other);
const $input_other$1 = /*@__PURE__*/ _const("input_other", $input_other__closure);
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
const $input_other = ($scope, input_other) => $input_other$1($scope["#childScope/1"], input_other);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
