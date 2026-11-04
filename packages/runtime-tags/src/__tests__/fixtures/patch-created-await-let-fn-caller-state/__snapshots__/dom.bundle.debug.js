// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $f = _let("f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup$2 = $setup__script$1;
const $input$2 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/inner.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $await_content__input_label__OR__v = /*@__PURE__*/ _or_patch("__tests__/tags/inner.marko_2_input_label#0:4_v#2/setup", 3, ($scope) => $input_fn($scope["#childScope/0"], function() {
	return $scope.v + ":" + $scope._._.input_label;
}));
const $await_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/inner.marko_2_input_label#0:4/subscribe", "input_label/5", $await_content__input_label__OR__v, ($scope) => $scope._._, "__tests__/tags/inner.marko_0_input_label#4/subscribers", 0);
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$setup$2($scope["#childScope/0"]);
};
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__input_label__OR__v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter("v", 1));
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=label>label</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $label = _let("label/5", ($scope) => $input_label($scope["#childScope/1"], $scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, $scope.label + "!");
}));
function $setup($scope) {
	$label($scope, "a");
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
