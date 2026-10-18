// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $f = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__input_label__OR__v = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(3, ($scope) => $input_fn($scope["#childScope/0"], $fn($scope))), "input_label/5", 0);
const $await_content__input_label = _closure_resume("__tests__/template.marko_2_input_label#0:4/subscribe", /*@__PURE__*/ _closure_get("input_label/5", $await_content__input_label__OR__v, ($scope) => $scope._._));
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$setup$1($scope["#childScope/0"]);
};
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__input_label__OR__v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter("v", 1));
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $fn = ($scope) => function() {
	return $scope.v + ":" + $scope._._.input_label;
};
_resumed["__tests__/template.marko_2/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
