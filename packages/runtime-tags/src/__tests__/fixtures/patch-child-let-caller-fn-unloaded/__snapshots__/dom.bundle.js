// tags/outer.marko
const $input_label__OR__fns = /*@__PURE__*/ _or_patch("b0", 6, ($scope) => _text($scope.a, $scope.f.f($scope.e)));
const $fns = _fill_let("b1", 5, $input_label__OR__fns);

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
