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
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_frame__OR__input_item__OR__input_label = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_frame, ($_) => ({
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
