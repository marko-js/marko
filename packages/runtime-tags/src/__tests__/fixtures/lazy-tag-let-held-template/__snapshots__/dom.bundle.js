// template.marko
const Child = _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $count__OR__Tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.d, () => ({ value: $scope.c })));
const $count = /*@__PURE__*/ _let(2, $count__OR__Tag);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("a", $template, "D l", 0, $input);
