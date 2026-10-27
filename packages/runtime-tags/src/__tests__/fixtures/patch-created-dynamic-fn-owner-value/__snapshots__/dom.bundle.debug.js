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
const $input_fn = /*@__PURE__*/ _const("input_fn", $input_fn__OR__open);
const $input$1 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_show", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_show && card_default, ($_) => ({ fn: $fn($scope) })))));
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_show__OR__input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $fn = ($scope) => function() {
	return "f:" + $scope.input_label;
};
_bind_resume("__tests__/template.marko_0/fn input_label", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
