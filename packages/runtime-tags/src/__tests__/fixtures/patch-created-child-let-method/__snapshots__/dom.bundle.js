// tags/outer.marko
const $input_label__OR__a = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.g.wrap($scope.f))));
const $a = /*@__PURE__*/ _fill_let("b2", 6, $input_label__OR__a);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, { wrap: (v) => v });
}));

// template.marko
function $api(v) {
	return "[" + v + "]";
}
_resumed.a0 = $api;
