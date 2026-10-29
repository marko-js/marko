// tags/outer.marko
const $if_content__input_label__OR__f = /*@__PURE__*/ _fill_join_if("b3", 5, /*@__PURE__*/ _or_resume("b5", 1, ($scope) => "g" in $scope._ && _text($scope.a, $scope._.g($scope._.f))), 1, 0);
const $if_content__f = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_label__OR__f);
const $f2 = /*@__PURE__*/ _let(6, $if_content__f);
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$f2($scope, (v) => "[" + v + "]");
}));
function $f(v) {
	return "<" + v + ">";
}
_resumed.b0 = $f;
