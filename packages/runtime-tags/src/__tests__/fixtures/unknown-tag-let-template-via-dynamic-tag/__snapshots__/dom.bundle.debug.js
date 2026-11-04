// tags/item.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var item_default = /*@__PURE__*/ _template("__tests__/tags/item.marko", $template$2, "D l", 0, $input$2);

// tags/host.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_frame__OR__input_item__OR__input_label = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag$1($scope, $scope.input_frame, ($_) => ({
	item: $scope.input_item,
	label: $scope.input_label
})), 2);
const $input_frame = /*@__PURE__*/ _const("input_frame", $input_frame__OR__input_item__OR__input_label);
const $input_item = /*@__PURE__*/ _const("input_item", $input_frame__OR__input_item__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_frame__OR__input_item__OR__input_label);
const $input$1 = ($scope, input) => {
	$input_frame($scope, input.frame);
	$input_item($scope, input.item);
	$input_label$1($scope, input.label);
};
var host_default = /*@__PURE__*/ _template("__tests__/tags/host.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_framed__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_framed ? host_default : null, ($_) => ({
	frame: frame_default,
	item: item_default,
	label: $scope.input_label
})));
const $input_framed = /*@__PURE__*/ _const("input_framed", $input_framed__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_framed__OR__input_label);
const $input = ($scope, input) => {
	$input_framed($scope, input.framed);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/frame.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__T = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.T, ($_) => ({ label: $scope.input_label })));
const $T = /*@__PURE__*/ _let("T/6", $input_label__OR__T);
const $input_item = $T;
const $setup__script = _script("__tests__/tags/frame.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup = $setup__script;
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__T);
const $input = ($scope, input) => {
	$input_item($scope, input.item);
	$input_label($scope, input.label);
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template, $walks, $setup, $input);
