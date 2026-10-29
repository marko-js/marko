// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content2__n = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_3_n#2:2/init", /*@__PURE__*/ _closure_get("n/4", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/tags/show-await.marko_3_n#2:2/subscribe"));
const $await_content2__setup = $await_content2__n;
const $await_content2__y = ($scope, y) => _text($scope["#text/1"], y);
const $await_content2__$params = ($scope, $params4) => $await_content2__y($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<b><!>:<!></b>", "D%c%", $await_content2__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $for_content__setup = ($scope) => {
	$await_content2($scope);
	$for_content__await_promise($scope, Promise.resolve($scope["#LoopKey"]));
};
const $for_content__$params = ($scope, $params3) => $for_content__n($scope, $params3[0]);
const $for_content__n__closure = /*@__PURE__*/ _closure($await_content2__n);
const $for_content__n = /*@__PURE__*/ _const("n", $for_content__n__closure);
const $await_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $await_content__x = ($scope, x) => $await_content__for($scope, [[x]]);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $if_content__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_p#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p)));
const $if_content__setup = ($scope) => {
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $p = _let("p/6", $if_content__p);
const $input_promise = $p;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
