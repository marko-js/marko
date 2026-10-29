// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n      .b { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19server-19copy-19never-19client-19if-1btags-1bshow-19await-1amarko_0); }\n    ";

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $if_content__input_label$1 = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/tags/show-await.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/3"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe"), 0));
const $if_content__n = _let("n/4", ($scope) => _text($scope["#text/2"], $scope.n));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_label$1($scope);
	$if_content__x._($scope);
	_style_shell($scope, "#style/0");
	_style_rule_item($scope["#style/0"], "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19server-19copy-19never-19client-19if-1btags-1bshow-19await-1amarko_0", "red");
	$if_content__n($scope, 1);
};
const $if_content__x = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_x#1:3/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.x)));
const $await_content__if = /*@__PURE__*/ _if("#text/1", "<style></style><b class=b><!>:<!>:<!></b>", " bD%c%c%", $if_content__setup$1);
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$await_content__if($scope, $scope.x ? 0 : 1);
	$if_content__x($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label$1);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/show-await.marko_fill0", "input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:6/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_p#0:7/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.p)));
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
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
