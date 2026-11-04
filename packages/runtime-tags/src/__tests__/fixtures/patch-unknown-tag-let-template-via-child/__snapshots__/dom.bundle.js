// tags/item.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var item_default = /*@__PURE__*/ _template("d", $template$1, "D l", 0, $input$1);

// tags/frame.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _or_patch("b1", 7, ($scope) => $dynamicTag($scope, $scope.g, ($_) => ({ label: $scope.f })));
const $T = /*@__PURE__*/ _fill_let("b2", 6, $input_label__OR__T);
const $input_item = $T;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));
const $setup = $setup__script;
const $input_label = /*@__PURE__*/ _const(5, $input_label__OR__T);
const $input = ($scope, input) => {
	$input_item($scope, input.item);
	$input_label($scope, input.label);
};
var frame_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/v:item.marko.register-default.js
_resumed.d = item_default;

// tags/v:frame.marko.register-default.js
_resumed.b = frame_default;
