// tags/cmp.marko
const $template$2 = "<p> </p><!><!><!>";
const $walks$2 = "D l%b%c";
const $setup$2 = ($_) => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $x__OR__y = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/0"], $scope.x === $scope.y ? "same" : "diff"));
const $x = _fill_let_resume("__tests__/tags/cmp.marko_fill0", "x/7", ($scope) => {
	$dynamicTag$1($scope, $scope.x);
	$x__OR__y($scope);
});
const $input_a = $x;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $y = _fill_let_resume("__tests__/tags/cmp.marko_fill1", "y/8", ($scope) => {
	$dynamicTag2($scope, $scope.y);
	$x__OR__y($scope);
});
const $input_b = $y;
const $input$2 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var cmp_default = /*@__PURE__*/ _template("__tests__/tags/cmp.marko", $template$2, $walks$2, 0, $input$2);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/5", ($scope) => _text($scope["#text/1"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $Inner_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log($scope._._._.input_label);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content("__tests__/template.marko_3*content", "<b> </b>", " D ", $Inner_content__setup);
const $card_content__Inner = ($scope, Inner) => {
	$input_a($scope["#childScope/0"], Inner);
	$input_b($scope["#childScope/0"], Inner);
};
const $card_content__setup = ($scope) => $card_content__Inner($scope, { content: $Inner_content($scope) });
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
