// tags/item.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var item_default = /*@__PURE__*/ _template("__tests__/tags/item.marko", $template$2, "D l", 0, $input$2);

// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_item__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/tags/frame.marko_0_input_item#3_input_label#4/setup", 5, ($scope) => $dynamicTag$1($scope, $scope.input_item, ($_) => ({ label: $scope.input_label })));
const $input_item = /*@__PURE__*/ _const("input_item", $input_item__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_item__OR__input_label);
const $input$1 = ($scope, input) => {
	$input_item($scope, input.item);
	$input_label$1($scope, input.label);
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $n = _let("n/8", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_framed__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_framed#5_input_label#6/setup", 7, ($scope) => $dynamicTag($scope, $scope.input_framed ? frame_default : null, ($_) => ({
	item: item_default,
	label: $scope.input_label
})));
const $input_framed = /*@__PURE__*/ _const("input_framed", $input_framed__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_framed__OR__input_label);
const $input = ($scope, input) => {
	$input_framed($scope, input.framed);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
