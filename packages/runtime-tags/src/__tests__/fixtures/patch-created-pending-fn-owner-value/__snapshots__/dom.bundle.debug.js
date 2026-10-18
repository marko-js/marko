// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $g = ($scope, g) => _text($scope["#text/1"], g());
const $input_fn__OR__open = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_fn", /*@__PURE__*/ _or(6, ($scope) => $g($scope, $scope.open ? $scope.input_fn : () => "-")));
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", $input_fn__OR__open);
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input_fn = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_fn", $input_fn__OR__open);
const $input$1 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise/6", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_2_input_promise#0:4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $placeholder_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $input_fn($scope["#childScope/0"], $fn($scope)), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__input_label($scope);
	$setup$1($scope["#childScope/0"]);
};
const $placeholder_content = _content("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $placeholder_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($placeholder_content__input_label);
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__closure));
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $fn = ($scope) => function() {
	return "f:" + $scope._.input_label;
};
_resumed["__tests__/template.marko_1/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
