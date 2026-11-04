// tags/item.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var item_default = /*@__PURE__*/ _template("d", $template, "D l", 0, $input);

// tags/frame.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _or_patch("b1", 7, ($scope) => $dynamicTag($scope, $scope.g, ($_) => ({ label: $scope.f })));
const $T = /*@__PURE__*/ _fill_let("b2", 6, $input_label__OR__T);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));

// tags/v:item.marko.register-default.js
_resumed.d = item_default;
