// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $if_content__x = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_x#1:2/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.x)));
const $if_content__n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $if_content__setup = ($scope) => {
	$if_content__x._($scope);
	$if_content__n($scope, 3);
};
const $await_content__if = /*@__PURE__*/ _if("#text/0", "<p><!>:<!></p>", "D%c%", $if_content__setup);
const $await_content__x__$global_flag = /*@__PURE__*/ _fill_global_join("__tests__/tags/show-await.marko_1_$global_flag#0:8_x#2", ($scope) => $await_content__if($scope, $scope.x && _global_read($scope.$global, "flag") ? 0 : 1), "flag");
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	$await_content__x__$global_flag($scope);
	$if_content__x($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
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
