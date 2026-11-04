// tags/outer.marko
const $input_label__OR__fns = /*@__PURE__*/ _or_patch("b0", 6, ($scope) => _text($scope.a, $scope.f.f($scope.e)));
const $fns = _fill_let("b1", 5, $input_label__OR__fns);

// template.marko
const $x = _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, +$scope.h + 1);
}));
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
