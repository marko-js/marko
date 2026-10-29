// tags/outer.marko
const $input_label__OR__f = /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.f($scope.e)));
const $f2 = /*@__PURE__*/ _let(5, $input_label__OR__f);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$f2($scope, (v) => v);
}));
function $f(v) {
	return "[" + v + "]";
}
_resumed.b0 = $f;
