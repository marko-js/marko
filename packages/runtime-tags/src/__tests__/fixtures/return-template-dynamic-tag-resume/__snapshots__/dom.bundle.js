// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/v:child.marko.register-default.js
_resumed.b = child_default;

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $Tag__OR__count = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.e, () => ({ value: $scope.f })), 1, 1);
const $count = /*@__PURE__*/ _let(5, $Tag__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.f + 1);
}));
