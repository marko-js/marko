// tags/gm/index.marko
const $z__OR__$global_mark = /*@__PURE__*/ _or_patch("b3", 6, ($scope) => _text($scope.a, $scope.e + $scope.$.mark));
const $z = /*@__PURE__*/ _const(4, $z__OR__$global_mark);
const $input_v__OR__$global_flag = /*@__PURE__*/ _or_patch("b2", 5, ($scope) => $z($scope, $scope.d + $scope.$.flag));
const $input_v = /*@__PURE__*/ _const(3, $input_v__OR__$global_flag);
const $global_flag = _fill_global("b0", $input_v__OR__$global_flag, "flag");
const $global_mark = _fill_global("b1", $z__OR__$global_mark, "mark");

// template.marko
const $count = _let(3, ($scope) => {
	$input_v($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.d + 1);
}));
