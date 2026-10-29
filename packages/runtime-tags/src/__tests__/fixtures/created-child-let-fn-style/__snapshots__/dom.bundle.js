// tags/outer.marko
const $input_label__OR__f = /*@__PURE__*/ _or(7, ($scope) => _style_rule_item($scope.b, "--M_b0", $scope.g($scope.f) === "w-b" ? "red" : "blue"));
const $f = /*@__PURE__*/ _let(6, $input_label__OR__f);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, (v) => "p-" + v);
}));
