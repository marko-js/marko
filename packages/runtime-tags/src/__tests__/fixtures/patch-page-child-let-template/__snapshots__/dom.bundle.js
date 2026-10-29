// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("c1", 5, /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.g, ($_) => ({ label: $scope.f }))));
const $T = /*@__PURE__*/ _fill_let("c2", 6, $input_label__OR__T);
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
