// tags/child/index.marko
const $first = ($scope, first) => _text($scope.a, first);
const $rest = ($scope, rest) => _text($scope.b, Object.keys(rest).join(","));

// template.marko
const $input__OR__n = /*@__PURE__*/ _or(7, ($scope) => {
	const $child_input_spread = {
		first: $scope.g,
		...$scope.f,
		s: $scope.g,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	};
	$first($scope.d, $child_input_spread.first);
	$rest($scope.d, (({ first, ...rest }) => rest)($child_input_spread));
});
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	let $cond;
	if ($scope.g) $cond = attrTag({ z: 2 });
	$first($scope.c, $scope.g);
	$rest($scope.c, {
		s: $scope.g,
		cond: $cond,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	$input__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
