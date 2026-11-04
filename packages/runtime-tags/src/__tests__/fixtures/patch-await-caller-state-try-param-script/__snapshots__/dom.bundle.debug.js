// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $catch_content = _content("__tests__/tags/show-await.marko_3*content", "failed");
const $try_content__input_label__OR__x__script = _script_patch("__tests__/tags/show-await.marko_2_input_label#0:4_x#1:3 >>input_label >x", ($scope) => document.title = $scope._.x + ":" + $scope._._.input_label);
const $try_content__input_label__OR__x = /*@__PURE__*/ _or_patch("__tests__/tags/show-await.marko_2_input_label#0:4_x#1:3/setup", 0, $try_content__input_label__OR__x__script);
const $try_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/show-await.marko_2_input_label#0:4/subscribe", "input_label/5", $try_content__input_label__OR__x, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_label($scope);
	$try_content__x($scope);
};
const $try_content__x = /*@__PURE__*/ _closure_get_patch("__tests__/tags/show-await.marko_2_x#1:3/subscribe", "x/6", $try_content__input_label__OR__x);
const $await_content__x__closure = /*@__PURE__*/ _closure($try_content__x);
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	$await_content__x__closure($scope);
	_text($scope["#text/0"], $scope.x);
});
const $await_content__try = /*@__PURE__*/ _try("#text/1", 0, 0, $try_content__setup, 0, $catch_content);
const $await_content__setup = $await_content__try;
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($try_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:6/setup", "#text/1", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__p = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_p#0:7/setup", "#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p));
const $p = _let("p/7", $if_content__p);
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
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
