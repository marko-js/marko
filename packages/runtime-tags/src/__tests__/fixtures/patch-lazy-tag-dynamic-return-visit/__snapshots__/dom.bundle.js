// template.marko
const Child = _load_ready_template("_a", /*@__PURE__*/ _load_template("a", () => import("./child.mjs").then((mod) => mod.default)));
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));

// child.marko
const $template = "<button> </button>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("a", $template, "D l", 0, $input);
