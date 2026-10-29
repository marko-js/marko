// tags/outer.marko
const $input_label__OR__a = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _or_resume("b2", 7, ($scope) => "g" in $scope && _text($scope.b, $scope.g.wrap($scope.f))));
const $a = /*@__PURE__*/ _let(6, $input_label__OR__a);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, { wrap: (v) => v });
}));
