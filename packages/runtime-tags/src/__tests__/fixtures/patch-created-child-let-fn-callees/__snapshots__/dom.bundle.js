// tags/outer.marko
const $input_label__OR__o = /*@__PURE__*/ _fill_join("b1", 7, /*@__PURE__*/ _or_resume("b4", 12, ($scope) => "i" in $scope && _text($scope.d, $scope.k.f($scope.h))));
const $o = /*@__PURE__*/ _const(10, $input_label__OR__o);
const $input_label__OR__f = /*@__PURE__*/ _fill_join("b1", 7, /*@__PURE__*/ _or_resume("b2", 9, ($scope) => "i" in $scope && _text($scope.b, [$scope.h].map($scope.i).join())));
const $input_label__OR__g = /*@__PURE__*/ _fill_join("b1", 7, /*@__PURE__*/ _or_resume("b3", 11, ($scope) => "i" in $scope && _text($scope.c, $scope.i($scope.h))));
const $f = /*@__PURE__*/ _let(8, ($scope) => {
	$o($scope, { f: $scope.i });
	$input_label__OR__f($scope);
	$input_label__OR__g($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, (v) => v);
}));
