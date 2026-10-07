// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value$1 = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value$1($scope, input.value);
var child_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/wrapper.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_type__OR__input_value = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.d, () => ({ value: $scope.e })));
const $input_value = /*@__PURE__*/ _const(4, $input_type__OR__input_value);

// tags/v:child.marko.register-default.js
_resumed.b = child_default;

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_value($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
