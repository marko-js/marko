// tags/outer.marko
const $obj2 = ($scope, obj2) => $obj2_obj($scope, obj2.obj);
const $obj = ($scope, obj) => $obj2($scope, { obj });
const $f = fill("b1", /*@__PURE__*/ _let(5, ($scope) => $obj($scope, { f: $scope.f })));
const $input_label__OR__obj2_obj = /*@__PURE__*/ _or(9, ($scope) => _text($scope.a, $scope.i.f($scope.e)));
const $obj2_obj = /*@__PURE__*/ _const(8, $input_label__OR__obj2_obj);
const $input_label = fill("b0", /*@__PURE__*/ _const(4, $input_label__OR__obj2_obj));

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
