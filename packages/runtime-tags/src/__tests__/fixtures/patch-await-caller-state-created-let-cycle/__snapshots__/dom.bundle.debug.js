// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__setup = $await_content__input_label;
const $await_content__a = _let("a/6", ($scope) => {
	$await_content__a_v($scope, $scope.a?.v);
	$await_content__b__OR__a($scope);
});
const $await_content__b__OR__a = /*@__PURE__*/ _or_resume("__tests__/tags/show-await.marko_1_b#5_a#6/init", 7, ($scope) => $await_content__a($scope, {
	v: $scope.b,
	self: $a($scope)
}));
const $await_content__b = _let("b/5", ($scope) => {
	$await_content__b__OR__a($scope);
	_text($scope["#text/0"], $scope.b);
});
const $await_content__x = $await_content__b;
const $await_content__a_v__script = _script("__tests__/tags/show-await.marko_1_a_v#8", ($scope) => _on($scope["#button/2"], "click", function() {
	console.log($scope.a_v);
}));
const $await_content__a_v = /*@__PURE__*/ _const("a_v", $await_content__a_v__script);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>|<!></p><button class=log>log</button>", "D%c%l ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise$1($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $a = ($scope) => () => $scope.a;
_resumed["__tests__/tags/show-await.marko_1/a"] = $a;
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
