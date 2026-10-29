// tags/outer.marko
const $if = /*@__PURE__*/ _if(1, "<b>yes</b>", 0, 0, "<i>no</i>");
const $input_label__OR__f = /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.g($scope.f) === "w-b" ? 0 : 1));
const $f = /*@__PURE__*/ _let(6, $input_label__OR__f);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, $scope.g === $scope.e ? (v) => "p-" + v : $scope.e);
}));

// template.marko
function $wrap(v) {
	return "w-" + v;
}
_resumed.a0 = $wrap;
