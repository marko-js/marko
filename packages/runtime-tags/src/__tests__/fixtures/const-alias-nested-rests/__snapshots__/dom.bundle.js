// template.marko
const $obj = /*@__PURE__*/ _let(7, ($scope) => {
	$outer($scope, (({ a, ...outer }) => outer)($scope.h));
	$obj_d($scope, $scope.h.d);
	$a2($scope, $scope.h.a);
});
const $outer = /*@__PURE__*/ _const(12, ($scope) => _text($scope.c, JSON.stringify($scope.m)));
const $pattern2 = ($scope, $pattern) => {
	$last($scope, (([, , ...last]) => last)($pattern));
	$first($scope, $pattern[0]);
	$second($scope, $pattern[1]);
};
const $obj_d = /*@__PURE__*/ _const(8, ($scope) => $pattern2($scope, [
	$scope.i,
	4,
	5,
	6
]));
const $a2 = /*@__PURE__*/ _const(9, ($scope) => {
	$inner($scope, (({ b, ...inner }) => inner)($scope.j));
	$b($scope, $scope.j.b);
});
const $inner = /*@__PURE__*/ _const(11, ($scope) => _text($scope.b, JSON.stringify($scope.l)));
const $b = /*@__PURE__*/ _const(10, ($scope) => _text($scope.a, $scope.k));
const $setup__script = _script("a0", ($scope) => _on($scope.g, "click", function() {
	$obj($scope, {
		a: {
			b: 4,
			c: 5
		},
		d: 6
	});
}));
const $last = ($scope, last) => _text($scope.f, last.join("+"));
const $first = ($scope, first) => _text($scope.d, first);
const $second = ($scope, second) => _text($scope.e, second);
