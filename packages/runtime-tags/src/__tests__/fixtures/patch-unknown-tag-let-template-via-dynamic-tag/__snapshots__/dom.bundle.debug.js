// tags/item.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_label$3 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$3 = ($scope, input) => $input_label$3($scope, input.label);
var item_default = /*@__PURE__*/ _template("__tests__/tags/item.marko", $template$3, "D l", 0, $input$3);

// tags/host.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_frame__OR__input_item__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/tags/host.marko_0_input_frame#3_input_item#4_input_label#5/setup", 6, ($scope) => $dynamicTag$2($scope, $scope.input_frame, ($_) => ({
	item: $scope.input_item,
	label: $scope.input_label
})), 2);
const $input_frame = /*@__PURE__*/ _const("input_frame", $input_frame__OR__input_item__OR__input_label);
const $input_item$1 = /*@__PURE__*/ _const("input_item", $input_frame__OR__input_item__OR__input_label);
const $input_label$2 = /*@__PURE__*/ _const("input_label", $input_frame__OR__input_item__OR__input_label);
const $input$2 = ($scope, input) => {
	$input_frame($scope, input.frame);
	$input_item$1($scope, input.item);
	$input_label$2($scope, input.label);
};
var host_default = /*@__PURE__*/ _template("__tests__/tags/host.marko", $template$2, "b%c", 0, $input$2);

// tags/frame.marko
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__T = /*@__PURE__*/ _or_patch("__tests__/tags/frame.marko_0_input_label#5_T#6/setup", 7, ($scope) => $dynamicTag$1($scope, $scope.T, ($_) => ({ label: $scope.input_label })));
const $T = /*@__PURE__*/ _fill_let("__tests__/tags/frame.marko_0_T#6/fill", "T/6", $input_label__OR__T);
const $input_item = $T;
const $setup__script = _script("__tests__/tags/frame.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__T);
const $input$1 = ($scope, input) => {
	$input_item($scope, input.item);
	$input_label$1($scope, input.label);
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/v:item.marko.register-default.js
_resumed["__tests__/tags/item.marko"] = item_default;

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_framed__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_framed#3_input_label#4/setup", 5, ($scope) => $dynamicTag($scope, $scope.input_framed ? host_default : null, ($_) => ({
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
