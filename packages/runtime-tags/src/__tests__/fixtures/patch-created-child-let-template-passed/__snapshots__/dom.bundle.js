// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/flag.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("d1", 6, /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.h, ($_) => ({ label: $scope.g }))));
const $T = /*@__PURE__*/ _fill_let("d2", 7, ($scope) => {
	$input_value($scope.b, `${!!$scope.h}`);
	$input_label__OR__T($scope);
});
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
