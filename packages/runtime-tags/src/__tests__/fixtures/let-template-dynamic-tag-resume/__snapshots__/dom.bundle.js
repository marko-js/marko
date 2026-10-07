// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/v:child.marko.register-default.js
_resumed.b = child_default;

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $count__OR__Tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.d, () => ({ value: $scope.c })));
const $count = /*@__PURE__*/ _let(2, $count__OR__Tag);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
