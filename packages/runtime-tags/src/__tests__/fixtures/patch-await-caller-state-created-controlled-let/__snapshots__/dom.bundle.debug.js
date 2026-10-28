// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__g = /*@__PURE__*/ _fill_let_change("__tests__/tags/show-await.marko_fill2", "g/6", ($scope) => _text($scope["#text/0"], $scope.g));
const $await_content__input_label__OR__a = /*@__PURE__*/ _fill_signal("input_label __tests__/tags/show-await.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/tags/show-await.marko_1_input_label#0:4_a#4/init", 5, ($scope) => $await_content__g($scope, $scope.a + ":" + $scope._.input_label, $valueChange($scope))), _closure_subscribers, "input_label/5", 0);
const $await_content__input_label = _closure_resume("__tests__/tags/show-await.marko_1_input_label#0:4/subscribe", /*@__PURE__*/ _closure_get("input_label/5", $await_content__input_label__OR__a));
const $await_content__setup__script = _script("__tests__/tags/show-await.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$await_content__g($scope, "q");
}));
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__setup__script($scope);
};
const $await_content__a = /*@__PURE__*/ _fill_let("__tests__/tags/show-await.marko_fill1", "a/4", $await_content__input_label__OR__a);
const $await_content__x = $await_content__a;
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><button class=g>g</button>", "D l ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/show-await.marko_fill0", "input_label", $input_label__closure);
const $valueChange = ($scope) => function(v) {
	$await_content__a($scope, v);
};
_resumed["__tests__/tags/show-await.marko_1/valueChange"] = $valueChange;
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=set>set</button><!><!>";
const $walks = " b%c";
const $if_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:6/init", /*@__PURE__*/ _fill_signal("input_promise __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise))));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$if_content__l._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__l = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_l#0:7/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.l)));
const $l = /*@__PURE__*/ _let("l/7", $if_content__l);
const $input_label = $l;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$l($scope, "z");
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_promise", $if_content__input_promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
