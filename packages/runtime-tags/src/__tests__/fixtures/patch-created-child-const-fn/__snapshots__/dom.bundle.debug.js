// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $g = ($scope, g) => _text($scope["#text/1"], g());
const $input_fn__OR__open = /*@__PURE__*/ _fill_signal("input_fn __tests__/tags/card.marko_fill0", /*@__PURE__*/ _or(6, ($scope) => $g($scope, $scope.open ? $scope.input_fn : () => "-")));
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", $input_fn__OR__open);
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input_fn = /*@__PURE__*/ _const("input_fn", $input_fn__OR__open);
const $input$1 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_fn($scope["#childScope/0"], $fn($scope)))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $fn = ($scope) => function() {
	return "f:" + $scope._.input_label;
};
_bind_resume("__tests__/template.marko_1/fn >input_label", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
