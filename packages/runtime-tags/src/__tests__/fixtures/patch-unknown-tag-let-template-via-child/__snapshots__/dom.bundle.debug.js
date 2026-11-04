// tags/item.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_label$3 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$3 = ($scope, input) => $input_label$3($scope, input.label);
var item_default = /*@__PURE__*/ _template("__tests__/tags/item.marko", $template$3, "D l", 0, $input$3);

// tags/frame.marko
const $template$2 = "<button>clear</button><section><!></section>";
const $walks$2 = " bD%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__T = /*@__PURE__*/ _or_patch("__tests__/tags/frame.marko_0_input_label#5_T#6/setup", 7, ($scope) => $dynamicTag$1($scope, $scope.T, ($_) => ({ label: $scope.input_label })));
const $T = /*@__PURE__*/ _fill_let("__tests__/tags/frame.marko_0_T#6/fill", "T/6", $input_label__OR__T);
const $input_item$1 = $T;
const $setup__script = _script("__tests__/tags/frame.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup$2 = $setup__script;
const $input_label$2 = /*@__PURE__*/ _const("input_label", $input_label__OR__T);
const $input$2 = ($scope, input) => {
	$input_item$1($scope, input.item);
	$input_label$2($scope, input.label);
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/host.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_frame__OR__input_item__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/tags/host.marko_0_input_frame#3_input_item#4_input_label#5/setup", 6, ($scope) => $dynamicTag($scope, $scope.input_frame, ($_) => ({
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

// tags/v:item.marko.register-default.js
_resumed["__tests__/tags/item.marko"] = item_default;

// tags/v:frame.marko.register-default.js
_resumed["__tests__/tags/frame.marko"] = frame_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $input_framed = ($scope, input_framed) => $input_frame($scope["#childScope/0"], input_framed ? frame_default : null);
function $setup($scope) {
	$input_item($scope["#childScope/0"], item_default);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_framed($scope, input.framed);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
