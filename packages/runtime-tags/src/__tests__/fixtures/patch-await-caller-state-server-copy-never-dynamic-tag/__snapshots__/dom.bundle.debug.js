// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $xbi_content__x = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_x#1:2/init", /*@__PURE__*/ _closure_get("x/3", ($scope) => _text($scope["#text/0"], $scope._.x), 0, "__tests__/tags/show-await.marko_2_x#1:2/subscribe"));
const $xbi_content__setup = $xbi_content__x;
const $xbi_content = /*@__PURE__*/ _content("__tests__/tags/show-await.marko_2*content", " ", " ", $xbi_content__setup);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $xbi_content);
const $await_content__x__closure = /*@__PURE__*/ _closure($xbi_content__x);
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	$await_content__dynamicTag($scope, $scope.x ? "b" : "i", ($_) => ({ class: "k" }));
	$await_content__x__closure($scope);
});
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
